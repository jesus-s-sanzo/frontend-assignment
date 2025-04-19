import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';

interface Movie {
    id: number;
    name: string;
    image: { medium: string, original: string } | null;
    summary: string | null;
    rating: { average: number } | null;
    officialSite: string | null;
    genres: string[];
    premiered: string | null;
}

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data as Movie[]);
            } catch (err) {
                setError('Failed to fetch movies.');
            } finally {
                setLoading(false); // Mark loading as complete
            }
        };

        if (loading) { // Only fetch if loading is true
            fetchData();
        }
    }, [loading]); // Dependency array ensures this runs only when `loading` changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
