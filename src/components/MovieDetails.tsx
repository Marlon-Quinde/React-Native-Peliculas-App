import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movieInteface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Datalless*/}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color={'gray'} />
          <Text style={{color: 'black'}}>{movieFull.vote_average}</Text>
          <Text numberOfLines={2} style={{color: 'black', marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia de la Pelicula */}
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Presupuesto:
          </Text>
          <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
          </Text>
        </View>
      </View>
      {/* Casting */}

      <View
        style={{
          marginTop: 10,
          marginBottom: 100,
        }}>
        <Text
          style={{
            marginHorizontal: 10,
            color: 'black',
            fontSize: 20,
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          horizontal
          renderItem={({item}) => <CastItem actor={item} />}
        />
      </View>
    </>
  );
};
