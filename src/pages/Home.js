
import SearchInput from '../components/SearchInput';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import SearchResults from '../components/SearchResults';
import useDebounce from '../hooks/useDebounce';


function Home() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(value, 200);



  const onChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {

    if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    api.get('/users', {
      params: {
        q: debouncedSearchTerm,
      }
    })
      .then((response) => {
        console.log(response);
        setResults(response.data);
        setLoading(false);
      });
  }, [debouncedSearchTerm]);

  const isEmpty = debouncedSearchTerm.length >= 2 && !results.length && !loading;

  return (
    <>
      <header className="header">
        <div className='container'>
          <SearchInput
            onChange={onChange}
            value={value}
          />
        </div>
      </header>
      <article className='container'>
        <SearchResults results={results} isEmpty={isEmpty} isLoading={loading} />
      </article>
    </>
  );
}

export default Home;
