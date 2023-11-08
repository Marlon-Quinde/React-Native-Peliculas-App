import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInteface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  posicion?: Position;
}

type Position = 'center' | 'flex-start';

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  posicion = 'flex-start',
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View
      style={{
        width,
        alignSelf: posicion,
        height,
        marginHorizontal: 5,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
