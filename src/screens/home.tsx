import React from 'react';
import { SafeAreaView, Text } from "react-native";

export class HomeScreen extends React.Component {
  static routeName = 'Home'
  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <Text>HOME SCREEN</Text>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}