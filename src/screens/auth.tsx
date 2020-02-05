import React, { useState } from 'react';
import { ProfileForm } from '../components/profile-form';
import { ThemeProvider, Text, SocialIcon, Button } from 'react-native-elements';
import { styles } from '../assets/style';
import { View } from 'react-native';
import { useNavigation } from '../hooks/use-navigation';


const AuthScreen = () => {
  const routeName = 'Auth'

  const navigation = useNavigation();

  const [isSignUp, setSignUp] = useState(false);

  return (
    <ThemeProvider>
      <View
        style={{ ...styles.container, backgroundColor: 'green' }}
      >
        <View
          style={{ backgroundColor: 'orange', ...styles.banner }}
        >
          <Text>
            {
              isSignUp ? 'Crie sua Conta' : 'Que bom te ver aqui!'
            }
          </Text>
        </View>
        <ProfileForm
          signUp={isSignUp}
        >
          <SocialIcon
            style={styles.marginVerticalMd}
            type="facebook"
            title="Continuar com Facebook"
            button
          />
          <Button
            type="clear"
            title={isSignUp ? 'Já tenho uma conta' : 'Não tenho uma conta'}
            onPress={() => setSignUp(!isSignUp)}
          />
        </ProfileForm>
      </View>
    </ThemeProvider>
  )
}

AuthScreen.navigationOptions = () => ({
  headerShown: false
})

export { AuthScreen };
