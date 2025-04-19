import { Movie } from '@/types';
import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/shows';

let moviesCache: Movie[] | null = null;

export const fetchMovies = async (): Promise<Movie[]> => {
    if (moviesCache) {
        console.log('Returning cached movies...');
        return moviesCache; // Return cached data if available
    }

    console.log('Fetching movies from API...');
    try {
        const response = await axios.get<Movie[]>(API_URL);
        moviesCache = response.data; // Cache the result
        return moviesCache;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchMovieById = async (id: number): Promise<Movie> => {
    try {
        const response = await axios.get<Movie>(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie with id ${id}:`, error);
        throw error;
    }
};

export const api = axios.create({
    baseURL: API_URL
});