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

const {height} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
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
      <View style={styles.marginContainer}>
        <Icon name="star-outline" color="gray" size={20} />
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
});
