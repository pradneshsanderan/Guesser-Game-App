import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [selecteduserNumber,setuserNumber] =useState();
  const StartGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={StartGameHandler}/>;
  if(selecteduserNumber){
    content=<GameScreen  userChoice={selecteduserNumber}/>;
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
