import { render, screen, waitFor } from '@testing-library/react';
import Home from './page';
import axios from 'axios';

jest.mock('axios');

// Mock componentes hijos para simplificar
jest.mock('./components/Header/Header', () => () => <div>Mock Header</div>);
jest.mock('./components/SearchFilter/SearchFilter', () => () => <div>Mock SearchFilter</div>);
jest.mock('./components/CountryCard/CountryCard', () => ({ country }) => (
  <div>{country.name.common}</div>
));

const mockCountries = [
  {
    name: { common: 'Colombia' },
    flags: { png: 'https://flagcdn.com/co.png' },
    population: 50000000,
    region: 'Americas',
    capital: ['Bogotá'],
    cca3: 'COL',
  },
  {
    name: { common: 'Japan' },
    flags: { png: 'https://flagcdn.com/jp.png' },
    population: 126000000,
    region: 'Asia',
    capital: ['Tokyo'],
    cca3: 'JPN',
  },
];

describe('Home page', () => {
  it('fetches and renders country cards', async () => {
    axios.get.mockResolvedValue({ data: mockCountries });

    render(<Home />);

    expect(screen.getByText('Mock Header')).toBeInTheDocument();
    expect(screen.getByText('Mock SearchFilter')).toBeInTheDocument();

    // Esperar a que se rendericen los nombres de los países
    await waitFor(() => {
      expect(screen.getByText('Colombia')).toBeInTheDocument();
      expect(screen.getByText('Japan')).toBeInTheDocument();
    });

    // Confirmar que axios fue llamado una sola vez
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3'
    );
  });
});
