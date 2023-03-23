import { render, screen } from '@testing-library/react';
import SearchInput from '../components/SearchInput';

test('Search Input', () => {
  render(<SearchInput value={"Gözde"} onChange={()=>{}} />);
  const element = screen.getByDisplayValue(/Gözde/i);
  expect(element).toBeInTheDocument();
});
