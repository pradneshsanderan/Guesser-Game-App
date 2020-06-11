import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNum = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Maths.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNum(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuee, setCurrentGuess] = useState(
        generateRandomNum(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if(currentGuee === userChoice){
            onGameOver();
        }
    },[currentGuee, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuee<props.userChoice)|| (direction==='greater' && currentGuee>props.userChoice)){
            Alert.alert('Dont lie!', 'You know that this is wrong', [{text:'Sorry!', style:'cancel'}]);
            return;
        }
        if(direction ==='lower'){
            currentHigh.current = currentGuee;
        }else{
            currentLow.current=currentGuee;
        }
        const nextNumber = generateRandomNum(currentLow, currentHigh, currentGuee);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds+1);
    };

    return (
        <View style={styles.screen}>
            <Text>
                Oponent's Guess
                </Text>
            <NumberContainer>{currentGuee}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }

});

export default GameScreen;