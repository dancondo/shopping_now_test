import React from 'react';
import { SafeAreaView, View, ScrollView, Text, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, Button } from 'react-native-elements';
import { useNavigation } from '../hooks/use-navigation';
import { SearchFields } from '../components/search-field';
import { AnimeCard } from '../components/anime-card';
import { styles } from '../assets/style';
import * as animesActions from '../store/actions/animes';

export const HomeScreen = () => {
  const routeName = 'Home'
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const animes = useSelector(state => state.animes.animes);
  const loading = useSelector(state => state.animes.loading);
  const onSearch = (value: string) => {
    dispatch(animesActions.fetchAnimes(value));
  }

  return (
    <ThemeProvider>
      <SafeAreaView
        style={styles.container}
      >
        <Button
          title={user.firstName}
          onPress={() => navigation.navigate('Profile')}
        />
        <ScrollView>
          <SearchFields
            onSearch={onSearch}
            loading={loading}
          />
            {
              loading ? (
                <ActivityIndicator
                  size={40}
                />
              ) : animes ? animes.map(
                anime => (
                  <AnimeCard
                    anime={anime}
                    key={anime.id}
                  />
                )
              ) : (
                <Text>Procure por um Anime</Text>
              )
            }
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}