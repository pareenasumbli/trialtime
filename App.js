<<<<<<< HEAD
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
   super(props)
   this.state = { age: 18 }
  }
  getVal(val){
  console.warn(val);
  }
  render() {

    return (
      <View style={styles.container}>
        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={18}
         maximumValue={71}
         value={this.state.age}
         onValueChange={val => this.setState({ age: val })}
         onSlidingComplete={ val => this.getVal(val)}
        />
        <Text style={styles.welcome}>
          {this.state.age}
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
=======
import React, {Component} from 'react';
import 'expo';
import {StyleSheet, View, Image} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>  </View>
        <View style={styles.formContainer}></View>
>>>>>>> origin/master
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
=======
    backgroundColor: "red"
  }
})
>>>>>>> origin/master
