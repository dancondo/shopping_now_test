import React, { ReactChild } from 'react';
import { useFormik } from 'formik';
import { styles } from '../assets/style';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import { User } from '../interfaces/user.interface'
import { useNavigation } from '../hooks/use-navigation';

type ProfileFormProps = {
  signUp: boolean,
  changeAction: () => void,
  user?: User,
  children?: ReactChild
}

export const ProfileForm = (props: ProfileFormProps) => {

  const dispatch = useDispatch()

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      email: props.user ? props.user.email : '',
      password: props.user ? props.user.firstName : ''
    },
    onSubmit: async values => {
      if (props.user) {
        return
      }
      await dispatch(authActions[props.signUp ? 'signUp' : 'login'](values));
      navigation.navigate('Home');
    }
  })




  return (
    <View
      style={{ ...styles.stretchContainer, ...styles.justifyBetween}}
    >
      <View>
        {
          props.signUp && (
            <React.Fragment>
              <Input
                placeholder="Nome"
                value={formik.values.firstName}
                onChangeText={text => formik.setFieldValue('firstName', text)}
              />
              <Input
                placeholder="Sobrenome"
                value={formik.values.lastName}
                onChangeText={text => formik.setFieldValue('lastName', text)}
              />
            </React.Fragment>
          )
        }
        <Input
          placeholder="Email"
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
        />
        <Input
          placeholder="Senha"
          value={formik.values.password}
          onChangeText={text => formik.setFieldValue('password', text)}
          secureTextEntry
        />
      </View>
      <View>
        <Button
          buttonStyle={styles.roundButton}
          containerStyle={{...styles.marginHorizontalMd, ...styles.marginVerticalMd}}
          title={props.signUp ? 'Cadastrar' : 'Login'}
          onPress={formik.submitForm}
          raised
        />
        { props.children && props.children }
        <Button
          type="clear"
          title={props.signUp ? 'Já tenho uma conta' : 'Não tenho uma conta'}
          onPress={props.changeAction}
        >

        </Button>
      </View>
    </View>
  )

}