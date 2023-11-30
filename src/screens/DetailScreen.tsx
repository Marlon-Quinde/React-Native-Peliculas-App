import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {ActivityIndicator} from 'react-native';
import {MovieDetails} from '../components/MovieDetails';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log({isLoading});
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={[{color: 'black'}, styles.subtitle]}>
          {movie.original_title}
        </Text>
        <Text style={[{color: 'black'}, styles.title]}>{movie.title}</Text>
      </View>
      {/* <Icon name="star-outline" color="gray" size={20} /> */}
      {isLoading ? (
        <ActivityIndicator size={35} color={'gray'} style={{marginTop: 20}} />
      ) : (
        <MovieDetails cast={cast} movieFull={movieFull!} />
      )}

      {/* Boton para cerrar */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageBorder: {
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    flex: 1,
    overflow: 'hidden',
  },
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.7,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 9,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 15,
    left: 10,
    backgroundColor: 'gray',
    borderRadius: 50,
  },
});
