import React from 'react';
import { Anime } from '../interfaces/anime.interface';
import { View, Text } from 'react-native';
import { Image, Divider } from 'react-native-elements';
import { styles } from '../assets/style';

export type AnimeCardProps = {
  anime: Anime
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {

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
        <Text>
          { anime.title }
        </Text>
        <Text
          style={{ flexWrap: 'wrap' }}
        >
          { anime.synopsis }
        </Text>
      </View>
    </View>
  )

}