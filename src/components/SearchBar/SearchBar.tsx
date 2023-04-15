import React, { useState, useEffect } from 'react';
import Error from '../Error/Error';
import { fetchSearch } from '../../apiCalls';
import { IJokeResponse } from '../../interfaces';
import './SearchBar.css';

type Event = React.ChangeEvent<HTMLInputElement>
type ClickMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
interface Props {
  displaySearch: (result?: IJokeResponse[]) => void
}

const SearchBar = ({ displaySearch }: Props) => {
  const [term, setTerm] = useState<string>('');
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setBtnDisable(!term)
  }, [term])

  const searchJokes = (event: ClickMouseEvent) => {
    event.preventDefault();
    setCurrentPage(1);
    setTotalPages(1);
    setError('');
    fetchSearch(term)
      .then(data => {
        console.log('Initial Search: ', data)
        const jokes = data?.results;
        data && setTotalPages(data.total_pages);
        
        if(!data?.results.length) {
          setNoResult(true);
          displaySearch(jokes);
        } else {
          setNoResult(false);
          displaySearch(jokes);
        }
      })
      .catch(error => setError(error.toString()))
  }

  // Conditional logic:
  // If data.current_page === total_pages, don't show next button
  // If data.current_page === 1, don't show prev button

  // Logic for pages:
  // Set state for current page

  const changePage = (button: string) => {
    let pageDirection: number = button === 'next' ? currentPage + 1 : currentPage - 1;
    
    if (currentPage !== totalPages) {
      fetchSearch(term, pageDirection)
      .then(data => {
        data && setCurrentPage(data?.current_page);
        const jokes = data?.results;
        if(!data?.results.length) {
          setNoResult(true);
          displaySearch(jokes);
        } else {
          setNoResult(false);
          displaySearch(jokes);
        }
      })
      .catch(error => setError(error.toString()))
    }
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
      <div className='page-btns'>
        <button className='prev' onClick={() => changePage('prev')}>← Previous Page</button>
        <button className='next' onClick={() => changePage('next')}>Next Page →</button>
      </div>
      {noResult && <p className='no-result-msg'>Sorry! No funny business here, try searching again.</p>}
      {error && <Error error={error} />}
    </div>
  );
}

export default SearchBar;