import React from 'react';
import { SafeAreaView, Text } from "react-native";
import { useSelector } from 'react-redux';

export const HomeScreen = () => {
  const routeName = 'Home'
  const user = useSelector(state => state.auth.user);

  return (
    <React.Fragment>
      <SafeAreaView>
        <Text>{user.firstName}</Text>
      </SafeAreaView>
    </React.Fragment>
  )
}