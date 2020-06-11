import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [selecteduserNumber,setuserNumber] =useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const StartGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
    setGuessRounds(0);
  };
  const configureNewGame = () => {
    setGuessRounds(0);
    setuserNumber(null);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={StartGameHandler}/>;
  if(selecteduserNumber && guessRounds<=0){
    content=<GameScreen  userChoice={selecteduserNumber} onGameOver={gameOverHandler}/>;
  }else if (guessRounds>0){
    content=<GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGame}/>;
  }
  return (
    <View style={styles.screen} >
      <Header title="Guesser" />
      {content}
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
