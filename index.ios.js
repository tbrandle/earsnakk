/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  WebView
} from 'react-native';

export default class earsnakk extends Component {
  constructor(){
    super()
    this.state ={
      user: {},
      text: 'username',
      password: 'password'
    }
  }

  conditional() {
    let keys = Object.keys(this.state.user).length
    if(keys){
      return (
        <WebView source={{uri: 'http://localhost:8888/login'}} style={styles.container}>
          <Text style={styles.welcome}>
            Hello this is cha boiii
          </Text>
        </WebView>
      )
    } else {
      return (
        <WebView source={{uri: 'http://localhost:8888/callback'}} style={styles.container}>
          <Text style={styles.welcome}>
            Hello this is cha boiii
          </Text>
        </WebView>
      )
    }
  }

  render() {
    return (
      <WebView source={{uri: 'http://localhost:8888/login'}} style={styles.container}>
        <Text style={styles.welcome}>
          Hello this is cha boiii
        </Text>
      </WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('earsnakk', () => earsnakk);
