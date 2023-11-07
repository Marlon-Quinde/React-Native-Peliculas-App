import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {interpolate} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100}></ActivityIndicator>
      </View>
    );
  }
  return (
    <View style={{marginTop: top}}>
      <View
        style={{
          flex: 1,
          height: 440,
          alignItems: 'center',
        }}>
        {/* Carruse principal */}
        <Carousel
          autoPlayInterval={3000}
          style={{
            backgroundColor: 'violet',
          }}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 145,
          }}
          autoPlay
          data={peliculasEnCine}
          renderItem={({item}) => <MoviePoster movie={item} />}
          width={width}
          height={height}
        />
      </View>

      {/* Peliculas populares */}
      <View
        style={{
          backgroundColor: 'red',
          // height: 230,
          top: (height / 2) * 1.05,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          Peliculas Populares
        </Text>
        <FlatList
          data={peliculasEnCine}
          renderItem={({item}) => <MoviePoster movie={item} />}></FlatList>
      </View>
    </View>
  );
};
