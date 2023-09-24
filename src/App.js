import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const App = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
  
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: "cyan",
      alignContent:"center"
    },
    hello: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    button: {
      width: 100,
      height: 40,
      backgroundColor: "red",
      justifyContent: "center",
      borderRadius: 4,
      alignItems: "center",
      alignSelf:"center"
    }
  });

export default App