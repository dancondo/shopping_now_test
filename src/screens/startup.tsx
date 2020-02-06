import React, { useEffect } from 'react';
import { styles } from '../assets/style'
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
import { useNavigation } from '../hooks/use-navigation';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

export const StartupScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const token = await AsyncStorage.getItem('token')
      if (!token) {
        navigation.navigate('Auth');
        return;
      }
      try {
        await dispatch(authActions.fetchUserData(token))
        navigation.navigate('App')
      } catch (err) {
        navigation.navigate('Auth')
      }
    }
    tryLogin();
  })
  return (
    <View
      style={{ flex: 1, ...styles.alignCenter, ...styles.justifyCenter }}
    >
      <ActivityIndicator
        size="large"
      />
    </View>
  )
}