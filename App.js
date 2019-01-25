/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage, Platform, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Login from './src/Login/Login';
import Signup from './src/Login/Signup';
import * as constant from './src/Helper/Constants'
import LoginRouter from './src/Router/LoginRouter'
import TabRouter from './src/Router/TabRouter'
var { EventEmitter } = require("fbemitter");

let context;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      loading: true,
    };
    context = this;

    constant.commonConstant.emitter.addListener("loginEvent", function (x) {
      setTimeout(() => {
        context.setState({ isLoggedIn: true });
      }, 100);
    });
  }

  componentDidMount() {

    AsyncStorage.getItem("userData").then(value => {
      if (value != null) {
        global.isLoggedIn = true;
        this.setState({
          isLoggedIn: true,
          loading: false,
        });

      } else {
        
        global.isLoggedIn = false;
        this.setState({
          isLoggedIn: false,
          loading: false,
        });

      }
    });
  }
  render() {
    console.disableYellowBox = true;

    if (this.state.isLoggedIn) {
      return (
        <TabRouter />
      );
    } else {
      return (
        <LoginRouter />

      );
    }
    //);
  }
}
// export default App;