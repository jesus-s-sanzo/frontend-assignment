import { Movie } from '@/types';
import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/shows';

let moviesCache: Movie[] | null = null;
let currentPage = 1; // Internal page counter

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        console.log(`Fetching movies from API (page: ${currentPage})...`);
        const response = await axios.get<Movie[]>(`${API_URL}?page=${currentPage}`);
        currentPage++; // Increment the page counter after a successful fetch
        return response.data;
    } catch (error) {
        console.error(`Error fetching movies for page ${currentPage}:`, error);
        throw error;
    }
};

export const resetPageCounter = (): void => {
    currentPage = 0; // Reset the page counter
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