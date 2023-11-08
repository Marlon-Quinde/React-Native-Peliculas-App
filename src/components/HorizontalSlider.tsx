import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInteface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}
export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        height: title ? 260 : 220,
        // top: (height / 2) * 1.05,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
      />
    </View>
  );
};
