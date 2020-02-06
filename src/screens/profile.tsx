import React, { useState } from 'react';
import { SafeAreaView, View, Platform } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, Button, Avatar, Text } from 'react-native-elements';
import { ProfileForm } from '../components/profile-form';
import * as authActions from '../store/actions/auth';
import { useNavigation } from '../hooks/use-navigation';
import { styles } from '../assets/style';
import { ScrollableFullScreenContainer } from '../components/scrollable-full-screen-container';
import { ImageCropPicker } from '../components/image-crop-picker';

const ProfileScreen = () => {
  const routeName = 'Home'

  const user = useSelector(state => state.auth.user);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [newImage, setNewImage] = useState(null);

  const onSubmit = async (values) => {
    await dispatch(authActions.update(values, {
        name: newImage.path.split('/').pop(),
        type: newImage.mime,
        uri: Platform.OS === "android" ? newImage.path : newImage.path.replace("file://", "")
      }  
    ));
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
        { newImage ? (
          <Avatar
            rounded
            source={{ uri: newImage.path }}
            size="xlarge"
          />
        ) : user.imageUrl ? (
          <Avatar
            rounded
            source={{ uri: user.imageUrl }}
            size="xlarge"
          />
        ) : (
          <Avatar
            rounded
            icon={{ name: 'person' }}
            size="xlarge"
          />
        )
        
        }
        <Text
          h4
        >
          { `${user.firstName} ${user.lastName}`}
        </Text>
        <ImageCropPicker
          title="trocar foto"
          setImage={setNewImage}
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