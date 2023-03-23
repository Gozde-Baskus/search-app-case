import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

test('Search Result Empty', () => {
  render(<SearchResults results={[]} isEmpty={true}/>);
  const element = screen.getByText(/no results/i);
  expect(element).toBeInTheDocument();
});

test('Search Result Fill', () => {
  render(<SearchResults results={[ { id: 123, name: "Gözde Başkuş" }]} isEmpty={false}/>);
  const element = screen.getByText(/Gözde/i);
  expect(element).toBeInTheDocument();
});
