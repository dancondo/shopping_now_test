import React, { ReactChild, useReducer } from 'react';
import { useFormik } from 'formik';
import { styles } from '../assets/style';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { User } from '../interfaces/user.interface'
import { useSelector } from 'react-redux';

type ProfileFormProps = {
  showExtraFields: boolean
  actionName: string,
  onSubmit: (values) => void
  user?: User,
  children?: ReactChild[] | ReactChild
}

export const ProfileForm = (props: ProfileFormProps) => {

  const formik = useFormik({
    initialValues: {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      email: props.user ? props.user.email : '',
      password: props.user ? props.user.password : ''
    },
    onSubmit: async values => {
      await props.onSubmit(values);
    }
  })

  const loading = useSelector(state => state.auth.loading);

  return (
    <View
      style={{ ...styles.stretchContainer, ...styles.justifyBetween}}
    >
      <View>
        {
          props.showExtraFields && (
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
          loading={loading}
          buttonStyle={styles.roundButton}
          containerStyle={{...styles.marginHorizontalMd, ...styles.marginVerticalMd}}
          title={props.actionName}
          onPress={formik.submitForm}
          raised
        />
        { props.children && props.children }
      </View>
    </View>
  )

}