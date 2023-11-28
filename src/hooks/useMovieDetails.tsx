import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInteface';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const movieCreditsPromise = movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: movieCreditsResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
