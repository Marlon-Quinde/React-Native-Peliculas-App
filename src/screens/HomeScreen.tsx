import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


import Carousel from 'react-native-reanimated-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getColor } from 'react-native-image-dominant-color';
import { getImageColors } from '../helpers/getColores';

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topPated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const colors = await getImageColors(uri)
    console.log(colors)
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100}></ActivityIndicator>
      </View>
    );
  }
  return (
    <GradientBackground >
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
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas populares */}
          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topPated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
