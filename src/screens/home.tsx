import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, ActivityIndicator, Animated, Dimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, Icon, Avatar, Text, Header } from 'react-native-elements';
import { useNavigation } from '../hooks/use-navigation';
import { SearchFields } from '../components/search-field';
import { AnimeCard } from '../components/anime-card';
import { styles } from '../assets/style';
import * as animesActions from '../store/actions/animes';

const HomeScreen = () => {
  const routeName = 'Home'
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const animes = useSelector(state => state.animes.animes);
  const loading = useSelector(state => state.animes.loading);
  const onSearch = (value: string) => {
    dispatch(animesActions.fetchAnimes(value));
  }



  const HEADER_MAX_HEIGHT = 240;
  const HEADER_MIN_HEIGHT = 84;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const screenWidth = Dimensions.get('screen').width
 
  const [value] = useState(new Animated.Value(0));

  const headerHeight = value.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  })

  const expandedContentOpacity = value.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });
  const contentOpacity = value.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <ThemeProvider>
      <View
        style={{ flex: 1 }}
      >
        <Animated.View
          style={
            {
              backgroundColor: '#2089dc',
              height: headerHeight,
              width: screenWidth,
              position: 'absolute',
              top: 0,
              left: 0
            }
          }
        >
          <Animated.View
            style={{
              display: 'flex',
              flex: 1,
              ...styles.alignCenter,
              ...styles.justifyCenter,
              opacity: contentOpacity
            }}
          >
            {
              user.imageUrl ? (
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
              style={{ color: 'white' }}
            >
              {`${user.firstName} ${user.lastName}`}
            </Text>
          </Animated.View>
        </Animated.View>
          <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: HEADER_MIN_HEIGHT,
              ...styles.alignCenter,
              borderBottomColor: 'transparent'
            }}
          >
            <Animated.View
              style={{
                opacity: expandedContentOpacity
              }}
            >
              {
                user.imageUrl ? (
                  <Avatar
                    rounded
                    source={{ uri: user.imageUrl }}
                    size="medium"
                  />
                ) : (
                  <Avatar
                    rounded
                    icon={{ name: 'person' }}
                    size="medium"
                  />
                )
              }
            </Animated.View>
            <Animated.View
              style={{
                opacity: expandedContentOpacity
              }}
            >
              <Text
                style={{ fontSize: 21, color: 'white' }}
              >{user.firstName}</Text>
            </Animated.View>
            <Icon
              name="edit"
              type='font-awesome'
              color="white"
              onPress={() => navigation.navigate('Profile')}
            />
          </Header>
        <ScrollView
          contentContainerStyle={{
            padding: 7,
            paddingTop: HEADER_SCROLL_DISTANCE
          }}
          onScroll={Animated.event(
            [{ nativeEvent: {
                  contentOffset: {
                    y: value
                  }
                }
            }])}
          scrollEventThrottle={16}
        >
          <SearchFields
            onSearch={onSearch}
            loading={loading}
          />
            {
              loading ? (
                <ActivityIndicator
                  size={40}
                />
              ) : animes ? 
                animes.lengh === 0 ?
                (
                  <View
                   style={{ ...styles.justifyCenter, ...styles.alignCenter }}
                  >
                    <Text>Nenhum Tesultado Encontrado</Text>
                  </View>
                ) : animes.map(
                  anime => (
                    <AnimeCard
                      anime={anime}
                      key={anime.id}
                    />
                )
              ) : (
                <View
                  style={{ ...styles.justifyCenter, ...styles.alignCenter }}
                >
                  <Text>Procure por um Anime</Text>
                </View>
              )
            }
        </ScrollView>
      </View>
    </ThemeProvider>
  )
}

HomeScreen.navigationOptions = () => ({
  headerShown: false,
})

export { HomeScreen }