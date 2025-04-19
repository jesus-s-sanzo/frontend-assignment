import React, { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';

interface Movie {
    id: number;
    name: string;
    image: { medium: string, original:string } | null;
    summary: string | null;
    rating: {average:number} | null;
    officialSite: string | null;
    genres: string[];
    premiered: string | null;
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    const [page, setPage] = useState(1);
    const [favorites, setFavorites] = useState<number[]>(() => {
        // Initialize favorites from localStorage
        const storedFavorites = localStorage.getItem('favoriteMovies');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
    const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const MOVIES_PER_PAGE = 20;

    useEffect(() => {
        // Save favorites to localStorage whenever they change
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        // Set up the IntersectionObserver to detect when the user scrolls to the bottom
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    const handleFavoriteToggle = (id: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.indexOf(id) !== -1
                ? prevFavorites.filter((favId) => favId !== id) // Remove from favorites
                : [...prevFavorites, id] // Add to favorites
        );
    };

    const handleCardClick = (id: number) => {
        setExpandedCardId((prevId) => {
            const newId = prevId === id ? null : id;

            // Scroll to the top of the card if it is being expanded
            if (newId !== null) {
                const cardElement = document.getElementById(`movie-card-${id}`);
                cardElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            return newId;
        });
    };

    // Dynamically slice the movies based on the current page
    const displayedMovies = movies.slice(0, page * MOVIES_PER_PAGE);

    return (
        <div className="movie-list">
            {displayedMovies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    name={movie.name}
                    image={movie.image || null}
                    summary={movie.summary}
                    officialSite={movie.officialSite}
                    genres={movie.genres}
                    premiered={movie.premiered}
                    rating={movie.rating?.average ?? null}
                    isFavorite={favorites.indexOf(movie.id) !== -1}
                    onFavoriteToggle={handleFavoriteToggle}
                    isExpanded={expandedCardId === movie.id}
                    onCardClick={handleCardClick}
                />
            ))}
            <div ref={observerRef} style={{ height: '1px' }} />
        </div>
    );
};

export default MovieList;