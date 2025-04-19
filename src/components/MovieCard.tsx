import React from 'react';

interface MovieCardProps {
    id: number;
    name: string;
    image: { medium: string; original: string } | null;
    summary: string | null;
    officialSite: string | null;
    genres: string[];
    premiered: string | null;
    isFavorite: boolean;
    onFavoriteToggle: (id: number) => void;
    isExpanded: boolean;
    onCardClick: (id: number) => void;
    rating?:  number | null;
}

const MovieCard: React.FC<MovieCardProps> = ({
    id,
    name,
    image,
    summary,
    officialSite,
    genres,
    premiered,
    isFavorite,
    onFavoriteToggle,
    isExpanded,
    onCardClick,
    rating,
}) => {
    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent the parent onClick from being triggered
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFavoriteToggle(id); // Toggle the favorite state
    };

    return (
        <div
            id={`movie-card-${id}`} // Add a unique ID for each card
            className={`movie-card ${isExpanded ? 'expanded' : ''}`}
            onClick={() => onCardClick(id)}
        >
            {image && (
                <img
                    className="movie-card-image"
                    src={isExpanded ? image.original : image.medium}
                    alt={name}
                />
            )}
            <div className="movie-card-content">
                <h3 className="movie-card-title">{name}</h3>
                <div
                    className={`movie-card-summary ${isExpanded ? 'expanded' : ''}`}
                    dangerouslySetInnerHTML={{
                        __html: isExpanded
                            ? summary || 'No summary available.'
                            : summary
                            ? `${summary.slice(0, 100)}...`
                            : 'No summary available.',
                    }}
                />
                {isExpanded && (
                    <div className="movie-card-details">
                        <p><strong>Genres:</strong> {genres.join(', ')}</p>
                        <p><strong>Premiered:</strong> {premiered || 'Unknown'}</p>
                        <p><strong>Rating:</strong> {rating || 'N/A'}</p> {}
                        {officialSite && (
                            <p>
                                <strong>Official Site:</strong>{' '}
                                <a href={officialSite} target="_blank" rel="noopener noreferrer">
                                    Visit
                                </a>
                            </p>
                        )}
                    </div>
                )}
                <div className="movie-card-footer">
                    <label>
                        <input
                            type="checkbox"
                            checked={isFavorite}
                            onClick={handleCheckboxClick} // Prevent parent onClick
                            onChange={handleCheckboxChange} // Handle favorite toggle
                        />
                        Mark as Favorite
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;