import React from 'react';
import { SafeAreaView, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, Button, Avatar, Text } from 'react-native-elements';
import { ProfileForm } from '../components/profile-form';
import * as authActions from '../store/actions/auth';
import { useNavigation } from '../hooks/use-navigation';
import { styles } from '../assets/style';
import { ScrollableFullScreenContainer } from '../components/scrollable-full-screen-container';

const ProfileScreen = () => {
  const routeName = 'Home'

  const user = useSelector(state => state.auth.user);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    await dispatch(authActions.update(values));
    navigation.navigate('Home');
  }

  const logout = () => {
    dispatch(authActions.logout);
    navigation.navigate('Auth');
  }

  return (
    <ScrollableFullScreenContainer
      hasHeader
    >
      <View
        style={styles.banner}
      >
        <Avatar
          rounded
          icon={{ name: 'person' }}
          size="xlarge"
        />
        <Text
          h4
        >
          { `${user.firstName} ${user.lastName}`}
        </Text>
        <Button
          titleStyle={styles.underline}
          title="trocar foto"
          type="clear"
          onPress={() => null}
        />
      </View>
      <ProfileForm
        actionName="Salvar"
        onSubmit={onSubmit}
        showExtraFields={true}
        user={user}
      >
        <Button
          titleStyle={styles.underline}
          title="Sair"
          type="clear"
          onPress={logout}
        />  
      </ProfileForm>
    </ScrollableFullScreenContainer>
  )
}

ProfileScreen.navigationOptions = () => ({
  title: '',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: 'transparent'
  }
})

export { ProfileScreen }