import React from 'react';
import {Text, View, ActivityIndicator, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width} = Dimensions.get('window');

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
    <View style={{marginTop: top + 20}}>
      <View
        style={{
          height: 440,
        }}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({item}) => <MoviePoster movie={item} />}
          sliderWidth={width}
          sliderHeight={300}
          itemHeight={300}
          itemWidth={300}
          windowSize={300}
        />
      </View>
    </View>
  );
};
