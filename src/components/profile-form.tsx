import React, { ReactChild, useReducer, useState } from 'react';
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
      setIsSubmitting(true);
      if (!hasErrors) {
        await props.onSubmit(values);
      }
    }
  })

  const loading = useSelector(state => state.auth.loading);

  const [isSubmitting, setIsSubmitting] = useState(false)

  const hasErrors = (): boolean => {
    return !!(emailErrors || firstNameErrors || lastNameErrors || passwordErrors)
  }

  const emailErrors = (): string => {
    if (!isSubmitting)
      return
    if (!formik.values.email)
      return 'Não pode ficar em branco'
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email))
      return 'Email invalido';
    return null
  }

  const firstNameErrors = (): string => {
    if (!isSubmitting)
      return
    if (!formik.values.firstName)
      return 'Não pode ficar em branco'
    return null
  }

  const lastNameErrors = (): string => {
    if (!isSubmitting)
      return
    if (!formik.values.lastName)
      return 'Não pode ficar em branco'
    return null
  }

  const passwordErrors = (): string => {
    if (!isSubmitting)
      return
    if (!formik.values.password)
      return 'Não pode ficar em branco'
    if (formik.values.password.length < 6)
      return 'Precisa ser mais longo que 5'
    return null
  }

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
                errorMessage={firstNameErrors()}
              />
              <Input
                placeholder="Sobrenome"
                value={formik.values.lastName}
                onChangeText={text => formik.setFieldValue('lastName', text)}
                errorMessage={lastNameErrors()}
              />
            </React.Fragment>
          )
        }
        <Input
          placeholder="Email"
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
          errorMessage={emailErrors()}
        />
        <Input
          placeholder="Senha"
          value={formik.values.password}
          onChangeText={text => formik.setFieldValue('password', text)}
          secureTextEntry
          errorMessage={passwordErrors()}
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