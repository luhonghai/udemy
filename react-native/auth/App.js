/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import {Button} from "./src/components/common/Button";
import {Spinner} from "./src/components/common/Spinner";

class App extends Component<{}> {

  state = { loggerIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCKUxhnfXSo8M-HA0dwj8hTr7KdlcH8ATw",
      authDomain: "react-native-starter-app-27e80.firebaseapp.com",
      databaseURL: "https://react-native-starter-app-27e80.firebaseio.com",
      projectId: "react-native-starter-app-27e80",
      storageBucket: "react-native-starter-app-27e80.appspot.com",
      messagingSenderId: "795471194114"
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(`onAuthStateChanged ${user}`);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggerIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="large"/>
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'}/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App
