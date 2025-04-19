import { Movie } from '@/types';
import React from 'react';

interface MovieDetailProps {
    movie: Movie;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
    return (
        <div className="movie-detail">
            <h1>{movie.name}</h1>
            {movie.image && <img src={movie.image.original} alt={movie.name} />}
            <p dangerouslySetInnerHTML={{ __html: movie.summary || 'No summary available.' }} />
            <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
            <p><strong>Rating:</strong> {movie.rating.average || 'N/A'}</p>
            <p><strong>Premiered:</strong> {movie.premiered || 'Unknown'}</p>
        </div>
    );
};

export default MovieDetail;