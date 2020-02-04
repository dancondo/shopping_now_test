import React from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { ProfileForm } from '../components/profile-form';

export class AuthScreen extends React.Component {
  static routeName = 'Auth'

  static navigationOptions = {
    headerShown: false 
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <ProfileForm
            action="Cadastrar"
          />
        </Container>
      </React.Fragment>
    )
  }
}