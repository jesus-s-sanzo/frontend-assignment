import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies, resetPageCounter } from '../services/api';

interface Movie {
    id: number;
    name: string;
    image: { medium: string; original: string } | null;
    summary: string | null;
    rating: { average: number } | null;
    officialSite: string | null;
    genres: string[];
    premiered: string | null;
}

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadMovies = async () => {
        setLoading(true);
        try {
            const newMovies = await fetchMovies();
            setMovies((prevMovies) => [
                ...prevMovies,
                ...newMovies.map((movie) => ({
                    ...movie,
                    rating: {
                        ...movie.rating,
                        average: movie.rating?.average ?? 0, // Default null to 0
                    },
                })),
            ]); // Append new movies
        } catch (err) {
            setError('Failed to fetch movies.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Reset the page counter when the component mounts
        resetPageCounter();
        loadMovies(); // Fetch the initial set of movies
    }, []); // Empty dependency array ensures this runs only once

    if (loading && movies.length === 0) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <MovieList movies={movies} />
            {!loading && (
                <div className="button-container">
                    <button onClick={loadMovies}>
                        Load More
                    </button>
                </div>
            )}
            {loading && <div>Loading more movies...</div>}
        </div>
    );
};

export default HomePage;
