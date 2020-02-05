import React from 'react';
import { SafeAreaView, Text } from "react-native";
import { useSelector } from 'react-redux';
import { ThemeProvider, Button } from 'react-native-elements';
import { useNavigation } from '../hooks/use-navigation';

export const HomeScreen = () => {
  const routeName = 'Home'
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);

  return (
    <ThemeProvider>
      <SafeAreaView>
        <Button
          title={user.firstName}
          onPress={() => navigation.navigate('Profile')}
        />
      </SafeAreaView>
    </ThemeProvider>
  )
}