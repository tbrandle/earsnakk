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
      text: 'username',
      password: 'password'
    }
  }
  render() {
    return (
      <WebView source={{uri: 'http://localhost:8888/login'}} style={styles.container}>
        <Text style={styles.welcome}>
          Hello this is cha boiii
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={() => this.setState({text})}
          placeholder={this.state.text} />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={() => this.setState({password})}
          placeholder={this.state.password} />

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
