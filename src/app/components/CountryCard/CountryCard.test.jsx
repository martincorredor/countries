import { render, screen } from '@testing-library/react';
import CountryCard from './CountryCard';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

const mockCountry = {
  name: { common: 'Colombia' },
  flags: { png: 'https://flagcdn.com/co.png' },
  population: 50000000,
  region: 'Americas',
  capital: ['Bogotá'],
  cca3: 'COL',
};

describe('CountryCard', () => {
  it('renders country info correctly', () => {
    render(<CountryCard country={mockCountry} />);

    expect(screen.getByText('Colombia')).toBeInTheDocument();
    expect(screen.getByText(/Population:/i));
    expect(screen.getByText(/Region:/i));
    expect(screen.getByText(/Capital:/i));
    expect(screen.getByRole('img'));
  });
});
