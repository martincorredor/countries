import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mockeamos ThemeToggle para no probar su lógica aquí
jest.mock('../ThemeToggle/ThemeToggle', () => () => <div>Mock ThemeToggle</div>);

describe('Header', () => {
  it('renders title and ThemeToggle', () => {
    render(<Header />);

    expect(screen.getByText('Where in the world?')).toBeInTheDocument();
    expect(screen.getByText('Mock ThemeToggle')).toBeInTheDocument();
  });
});
