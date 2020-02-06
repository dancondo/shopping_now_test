import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from '../assets/style';
import ImagePicker from 'react-native-image-crop-picker';
import { Alert } from 'react-native';

export type ImagePickerProps = {
  title: string;
  setImage: (val) => void;
}

export const ImageCropPicker = (props: ImagePickerProps) => {

  const camera = async () => {
    const image = await ImagePicker.openCamera({
      multiple: false,
      width: 300,
      height: 300
    }).catch(_e => {
      return
    });
    image && props.setImage(image);
  }

  const galery = async () => {
    const image = await ImagePicker.openPicker({
      multiple: false,
      width: 300,
      height: 300
    }).catch(_e => {
      return
    });
    image && props.setImage(image);
  }

  const haddleClick = () => {
    Alert.alert('Trocar Foto', null, [
      { text: 'Tirar Foto', onPress: camera },
      { text: 'Abrir Galeria', onPress: galery },
      { text: 'Cancelar', style: 'cancel' }
    ], {
      cancelable: false
    })
  }

  return (
    <Button
      titleStyle={styles.underline}
      title={props.title}
      type="clear"
      onPress={haddleClick}
    />
  )
}