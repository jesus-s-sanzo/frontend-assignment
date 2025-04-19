import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from '../components/MovieList';

const mockMovies = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Movie ${i}`,
    image: { medium: `https://example.com/movie${i}.jpg`, original: `https://example.com/movie${i}-original.jpg` },
    summary: `Summary for movie ${i}`,
    genres: ['Drama'],
    premiered: '2023-01-01',
    rating: { average: 8.5 },
    officialSite: `https://example.com/movie${i}`,
}));

beforeAll(() => {
    global.IntersectionObserver = class {
        root: Element | null = null;
        rootMargin: string = '';
        thresholds: ReadonlyArray<number> = [];
        constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
        observe() {}
        disconnect() {}
        unobserve() {}
        takeRecords(): IntersectionObserverEntry[] {
            return [];
        }
    };
});

test('renders movie list with title, image, and summary', () => {
    render(<MovieList movies={mockMovies} />);
    const movieTitles = screen.getAllByRole('heading', { level: 3 });
    expect(movieTitles).toHaveLength(20); // Ensure 20 movies are displayed
    expect(screen.getByText('Movie 0')).toBeInTheDocument();
    expect(screen.getByAltText('Movie 0')).toBeInTheDocument();
    expect(screen.getByText('Summary for movie 0...')).toBeInTheDocument();
});