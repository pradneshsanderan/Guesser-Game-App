import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import colors from '../constants/colors';

const NumberContainer = props => {
    <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    number:{
        color:Colors.accent,
        fontSize:22,

    }
});

export default NumberContainer;