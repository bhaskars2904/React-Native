/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
const firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCGhxvfGUdG2_7YIwLpWsu1lCOmgfhNMSk",
  authDomain: "testchat-ba5a1.firebaseapp.com",
  databaseURL: "https://testchat-ba5a1.firebaseio.com",
  storageBucket: "testchat-ba5a1.appspot.com",
  messagingSenderId: "240867191155"
};
firebase.initializeApp(config);

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Login from './Screens/Login'
import Signup from './Screens/Signup'
import ForgetPassword from './Screens/ForgetPassword'
import FriendsList from './Screens/FriendsList'
import Chat from './Screens/Chat'

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
const Router = createRouter(() => ({
  login: () => Login,
  signup: () => Signup,
  forgetPassword: () => ForgetPassword,
  friendsList: () => FriendsList,
  chat: () => Chat
}));

export default class Firechat extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content"/>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('login') } />
        </NavigationProvider>
      </View>
    );
  }
}
