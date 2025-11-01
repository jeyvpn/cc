import axios from 'axios';

const BASE_URL = 'https://cinemaplus-app.vercel.app/api';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json'
  }
});

export const getMovies = (page = 0) => client.get(`/movies/new?page=${page}`).then(r => r.data);
export const getTopMovies = (page = 0) => client.get(`/movies/top?page=${page}`).then(r => r.data);
export const getSeries = (page = 0) => client.get(`/series/new?page=${page}`).then(r => r.data);
export const search = (q: string) => client.get(`/search?q=${encodeURIComponent(q)}`).then(r => r.data);
export const getInfo = (id: number) => client.get(`/info?id=${id}`).then(r => r.data);
