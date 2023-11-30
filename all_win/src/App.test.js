import { render, screen } from '@testing-library/react';
import App from './App';
import { getAllWin } from './servicos/api'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});
