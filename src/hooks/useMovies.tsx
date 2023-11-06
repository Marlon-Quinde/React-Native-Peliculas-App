import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInteface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const getMovies = async () => {
    const respuesta = await movieDB.get<MovieDBNowPlaying>('/now_playing', {});
    const peliculas = respuesta.data.results;
    setPeliculasEnCine(peliculas);
    setIsLoading(false);
  };
  useEffect(() => {
    // Now_playing
    getMovies();
  }, []);

  return {peliculasEnCine, isLoading};
};
