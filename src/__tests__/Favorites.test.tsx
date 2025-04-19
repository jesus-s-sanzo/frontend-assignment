import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import MovieCard from '../components/MovieCard';
import React from 'react';
import { vi } from 'vitest';

const mockMovie = {
    id: 1,
    name: 'Movie 1',
    image: { medium: 'https://example.com/movie1.jpg', original: 'https://example.com/movie1-original.jpg' },
    summary: 'Summary for movie 1',
    genres: ['Drama'],
    premiered: '2023-01-01',
    rating: 8.5,
    officialSite: 'https://example.com/movie1',
};

test('toggles favorite state and calls the toggle handler', () => {
    const handleFavoriteToggle = vi.fn(); // Mock the toggle handler
    render(
        <MovieCard
            {...mockMovie}
            isFavorite={false}
            onFavoriteToggle={handleFavoriteToggle}
            isExpanded={false}
            onCardClick={() => {}} // Mock onCardClick to avoid errors
        />
    );

    // Find the checkbox
    const checkbox = screen.getByRole('checkbox', { name: /mark as favorite/i });

    // Simulate a click on the checkbox
    fireEvent.click(checkbox);

    // Assert that the toggle handler was called with the correct movie ID
    expect(handleFavoriteToggle).toHaveBeenCalledWith(mockMovie.id);
});