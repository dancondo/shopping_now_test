import React from 'react';
import { ProfileForm } from '../components/profile-form';
import { ThemeProvider, Text, SocialIcon } from 'react-native-elements';
import { styles } from '../assets/style';
import { View } from 'react-native';

type AuthScrenState = {
  isSignUp: boolean
}

export class AuthScreen extends React.Component<{}, AuthScrenState> {
  static routeName = 'Auth'

  static navigationOptions = {
    headerShown: false 
  }

  constructor(props) {
    super(props);
    this.state = {
      isSignUp: true
    }
  }

  render() {
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
                this.state.isSignUp ? 'Crie sua Conta' : 'Que bom te ver aqui!'
              }
            </Text>
          </View>
          <ProfileForm
            signUp={this.state.isSignUp}
            changeAction={() => this.setState({ isSignUp: !this.state.isSignUp })}
          >
            <SocialIcon
              style={styles.marginVerticalMd}
              type="facebook"
              title="Continuar com Facebook"
              button
            />
          </ProfileForm>
        </View>
      </ThemeProvider>
    )
  }
}