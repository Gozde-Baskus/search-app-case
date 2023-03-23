import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home result Info', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Please type minimum 2 characters to search/i);
  expect(linkElement).toBeInTheDocument();
});
