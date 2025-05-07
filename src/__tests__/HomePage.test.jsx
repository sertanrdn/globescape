import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { HomePage } from '../pages/HomePage';

// Mocking the Map component for not rendering the full Leaflet map
vi.mock('../components/Map', () => ({
    Map: () => <div data-testid="mock-map" />
}));

describe('HomePage', () => {
    it('renders the heading', () => {
        render(<HomePage />);
        expect(screen.getByRole('heading', { name: /explore the world/i })).toBeInTheDocument();
    });

    it('renders the paragraph description', () => {
        render(<HomePage />);
        expect(screen.getByText(/discover countries, mark your adventures/i)).toBeInTheDocument();
    });

    it('renders the Map component', () => {
        render(<HomePage />);
        expect(screen.getByTestId('mock-map')).toBeInTheDocument();
    });
});
  