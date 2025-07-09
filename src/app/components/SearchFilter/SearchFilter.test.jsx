import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from './SearchFilter';

const mockCountries = [
  {
    name: { common: 'Colombia' },
    region: 'Americas',
  },
  {
    name: { common: 'Germany' },
    region: 'Europe',
  },
  {
    name: { common: 'Japan' },
    region: 'Asia',
  },
];

describe('SearchFilter', () => {
  it('renders input and select', () => {
    const mockSetFiltered = jest.fn();
    render(<SearchFilter countries={mockCountries} setFiltered={mockSetFiltered} />);
    
    expect(screen.getByPlaceholderText(/search for a country/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('filters countries by text input', () => {
    const mockSetFiltered = jest.fn();
    render(<SearchFilter countries={mockCountries} setFiltered={mockSetFiltered} />);

    const input = screen.getByPlaceholderText(/search for a country/i);
    fireEvent.change(input, { target: { value: 'col' } });

    expect(mockSetFiltered).toHaveBeenCalledWith([
      expect.objectContaining({ name: { common: 'Colombia' } }),
    ]);
  });

  it('filters countries by region', () => {
    const mockSetFiltered = jest.fn();
    render(<SearchFilter countries={mockCountries} setFiltered={mockSetFiltered} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Asia' } });

    expect(mockSetFiltered).toHaveBeenCalledWith([
      expect.objectContaining({ name: { common: 'Japan' } }),
    ]);
  });
});
