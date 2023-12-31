import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topPated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100}></ActivityIndicator>
      </View>
    );
  }
  return (
    <ScrollView>
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
            style={
              {
                // backgroundColor: 'violet',
              }
            }
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 145,
            }}
            autoPlay
            data={nowPlaying}
            renderItem={({item}) => (
              <MoviePoster movie={item} posicion="center" />
            )}
            width={width}
            height={height}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topPated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
