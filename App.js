import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {

  const [info, setInfo] = useState('Guess number between 1-100');
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => startGame(), [])

  const startGame = () => {
    setRandomNumber(Math.floor(Math.random()*100)+1);
    setInfo('Guess a number between 1-100');
    setCount(1);
    setGuess('');
  }
  
  
  const checkIfMatch = () => {

    // setRandomNumber(Math.floor(Math.random()*10)+1);

      if(randomNumber > guess){
        setInfo('Your guess ' + guess + ' is too low')
        setCount(count + 1)
        setGuess('');
      } else if (randomNumber < guess){
        setInfo('Your guess ' + guess + ' is too high')
        setCount(count + 1)
        setGuess('');
      } else {
        Alert.alert('You guessed right with ' + (count) + ' guesses')
        setInfo('Guess number between 1-100')
        setGuess("")
        setCount(0)
        startGame()
        
      }

   


  }

  return (
    <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={{color: 'white'}}>Header</Text> 
        </View>

        <View style={styles.body}> 
          <Text>{info}</Text>
          {/* for testing the randomNumber 
          
          <Text>{randomNumber}</Text> */}
          <TextInput 
          onChangeText={guess => setGuess(guess)}
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Insert number"
          value={guess}>
          </TextInput>
          
          <Pressable> 
            <Text 
            onPress={checkIfMatch}
            style={styles.btn}>Check</Text>
          </Pressable>
        </View>

        <View style={styles.footer}> 
          <Text style={{color: 'white'}}>Footer</Text> 
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    flex: 0.2,
    width:"100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body:{
    flex: 2,
    padding:20,  
    justifyContent: 'center',  
    alignItems: 'center',
  },

  footer:{
    flex: 0.2,
    backgroundColor:"black", 
    width:"100%",
    height:"auto",
    alignItems: 'center',
    justifyContent: 'center',
  },


  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: "50%",
  },

  btn: {
    color: 'white',
    backgroundColor: 'black',
    width: 200,
    padding: 20,
    textAlign: 'center',
    fontWeight: "bold",
  }


});
