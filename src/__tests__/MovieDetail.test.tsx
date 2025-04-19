import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetail from '../components/MovieDetail';

const mockMovie = {
    id: 1,
    name: 'Movie 1',
    url: 'https://example.com/movie1',
    type: 'Scripted',
    language: 'English',
    status: 'Running',
    runtime: 60,
    premiered: '2023-01-01',
    officialSite: 'https://example.com/movie1',
    schedule: { time: '20:00', days: [ 'Monday' ] },
    rating: { average: 8.5 },
    weight: 90,
    network: { id: 1, name: 'Network 1', country: { name: 'USA', code: 'US', timezone: 'America/New_York' }, officialSite: 'https://example.com/network1' },
    webChannel: null,
    dvdCountry: null,
    genres: [ 'Drama', 'Action' ],
    image: { medium: 'https://example.com/movie1.jpg', original: 'https://example.com/movie1-original.jpg' },
    summary: 'Summary for movie 1',
    updated: 1672531200,
    _links: { self: { href: 'https://api.example.com/movies/1' } },
    averageRuntime: 60,
    ended: null,
    externals: { tvrage: null, thetvdb: null, imdb: 'tt1234567' },
};

test('renders movie detail view with additional information', () => {
    render(<MovieDetail movie={mockMovie} />);
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByAltText('Movie 1')).toHaveAttribute('src', mockMovie.image.original); // Ensure original image is used
    expect(screen.getByText('Summary for movie 1')).toBeInTheDocument();
    expect(screen.getByText('Drama, Action')).toBeInTheDocument();

    // Use a function matcher to find the "Rating" text
    expect(screen.getByText((content, element) => { return element?.textContent === 'Rating: 8.5'; })).toBeInTheDocument();

    // Use a function matcher to find the "Premiered" text
    expect(screen.getByText((content, element) => { return element?.textContent === 'Premiered: 2023-01-01'; })).toBeInTheDocument();
});