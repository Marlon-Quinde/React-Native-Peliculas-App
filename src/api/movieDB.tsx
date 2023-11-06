import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es-ES',
  },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjc3ZGU4ZjFlMWEyODBlZGQ2YWZlOWQ4ODcyM2U1NiIsInN1YiI6IjY1MmY1ODU5Y2FlZjJkMDBlMjhkNWZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3NA07XR13mt4vPEvHgAbSpxlbD2YwUn4cJBrleYQLVg',
  },
});

export default movieDB;
