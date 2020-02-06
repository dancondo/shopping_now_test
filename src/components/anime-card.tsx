import React from 'react';
import { Anime } from '../interfaces/anime.interface';
import { View } from 'react-native';
import { Image, Divider, Icon, Text } from 'react-native-elements';
import { styles } from '../assets/style';
import { useDispatch } from 'react-redux';
import { snackbarAsyncWrapper } from '../helpers/snackbar';
import * as animesActions from '../store/actions/animes';
import * as authActions from '../store/actions/auth';

export type AnimeCardProps = {
  anime: Anime
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    snackbarAsyncWrapper(async () => {
      await dispatch(animesActions.markAsFavorite(anime.id))
      await dispatch(authActions.updateFavorites(anime.favorite ? 1 : -1))
    })
  }

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', display: 'flex', ...styles.marginVerticalMd }}
    >
      <View
        style={{ flexGrow: 1 }}
      >
        <Image
          source={{ uri: anime.imageUrl }}
          style={{ width: 96, height: 136}}
        />
      </View>
      <View
        style={{ flexShrink: 1, ...styles.marginHorizontalMd }}
      >
        <Text
          style={{ fontWeight: 'bold' }}
        >
          { anime.title }
        </Text>
        <Text
          style={{ flexWrap: 'wrap' }}
        >
          { anime.synopsis }
        </Text>
      </View>
      <View>
        <Icon
          onPress={toggleFavorite}
          name={anime.favorite ? 'star' : 'star-border'}
          color="orange"
        />
      </View>
    </View>
  )

}