import React, { ReactChild } from 'react';
import { useFormik } from 'formik';
import { styles } from '../assets/style';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';

type ProfileFormProps = {
  signUp: boolean,
  changeAction: () => void,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  children?: ReactChild
}

export const ProfileForm = (props: ProfileFormProps) => {

  const formik = useFormik({
   initialValues: {
     firstName: props.firstName ? props.firstName : '',
     lastName: props.lastName ? props.lastName : '',
     email: props.email ? props.email : '',
     password: props.password ? props.firstName : ''
   },
   onSubmit: values => {
     console.log(values)
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