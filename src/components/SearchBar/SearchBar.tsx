import React, { useState, useEffect } from 'react';
import Error from '../Error/Error';
import { fetchSearch } from '../../apiCalls';
import { IJokeResponse } from '../../interfaces';
import './SearchBar.css';

type Event = React.ChangeEvent<HTMLInputElement>
type ClickMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
interface Props {
  displaySearch: (result: IJokeResponse[] | undefined) => void
}

const SearchBar = ({ displaySearch }: Props) => {
  const [term, setTerm] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [btnDisable, setBtnDisable] = useState<boolean>(true)
  const [noResult, setNoResult] = useState<boolean>(false)

  useEffect(() => {
    setBtnDisable(!term)
  }, [term])

  const searchJokes = (event: ClickMouseEvent) => {
    setError('');
    event.preventDefault();
    fetchSearch(term)
      .then(data => {
        const allJokes = data?.results;
        const totalPages = data?.total_pages
        
        if (totalPages) {
          for (let page = 2; page <= totalPages; page++) {
            fetchSearch(term, page)
              .then(data => data && allJokes?.push(...data.results))
          }
        }
        
        if(!data?.results.length) {
          setNoResult(true);
          displaySearch(allJokes);
        } else {
          setNoResult(false);
          displaySearch(allJokes);
        }
      })
      .catch(error => setError(error.toString()))
  }

  const clearSearch = (event: ClickMouseEvent) => {
    event.preventDefault();
    setTerm('');
    setNoResult(false);
    setError('');
    displaySearch(undefined)
  };

  return (
    <div className='search-form'>
      <form>
        <input
        type='text' 
        name='term' 
        placeholder='Search jokes' 
        value={term} 
        onChange={(event: Event) => setTerm(event.target.value)} 
      />
      <button className='search-btn' disabled={btnDisable} onClick={searchJokes}>&#9906;</button>
      <button className='clear-btn' onClick={clearSearch}>X</button>
      </form>
      {noResult && <p className='no-result-msg'>Sorry! No funny business here, try searching again.</p>}
      {error && <Error error={error} />}
    </div>
  );
}

export default SearchBar;