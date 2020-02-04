import React from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

type ProfileFormProps = {
  action: string
}

export class ProfileForm extends React.Component<ProfileFormProps> {
  render() {
    return (
      <Container>
        <Form>
          <Item>
            <Input placeholder="Nome" />
          </Item>
          <Item>
            <Input placeholder="Sobrenome" />
          </Item>
          <Item>
            <Input placeholder="Email" />
          </Item>
          <Item>
            <Input placeholder="Senha" />
          </Item>
        </Form>
        <Button
          rounded
          block
        >
          <Text>{this.props.action}</Text>
        </Button>
      </Container>
    )
  }
}