import React from 'react';
import { SafeAreaView, Text, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, Button, Avatar } from 'react-native-elements';
import { ProfileForm } from '../components/profile-form';
import * as authActions from '../store/actions/auth';
import { useNavigation } from '../hooks/use-navigation';
import { styles } from '../assets/style';
import { ScrollableFullScreenContainer } from '../components/scrollable-full-screen-container';

export const ProfileScreen = () => {
  const routeName = 'Home'

  const user = useSelector(state => state.auth.user);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    await dispatch(authActions.update(values));
    navigation.navigate('Home');
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
      </View>
      <ProfileForm
        actionName="Salvar"
        onSubmit={onSubmit}
        showExtraFields={true}
        user={user}
      >
        <Button
          title="Sair"
          type="clear"
        />  
      </ProfileForm>
    </ScrollableFullScreenContainer>
  )
}