import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      value:0
    }
  }
  increment=()=>{
    this.setState({
      value : this.state.value+1
    })
  }
   render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={this.increment}>
      <Text style={{fontSize:18}} >Click Here</Text>
      </TouchableOpacity>
      <Text style={styles.counter}> Counter : {this.state.value}   </Text>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:"cyan",
    padding:30,
    borderRadius:30

  },
  counter:{
    marginTop: 30,
    fontSize:18,
    color:"black"
  }
});
