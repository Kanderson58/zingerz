import React, { useState, useEffect } from 'react';
import Error from '../Error/Error';
import { fetchJokes } from '../../apiCalls';
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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [noResult, setNoResult] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setBtnDisable(!term);
  }, [term]);

useEffect(() => {
  if (searchTerm !== "") {
    fetchJokes(searchTerm)
      .then(data => {
        let totalPages = data?.total_pages;
        let fetchedJokes: IJokeResponse[] = [];
        let jokeIds: string[] = [];

        if (totalPages) {
          const pagePromises = [];
          for (let page = 1; page <= totalPages; page++) {
            pagePromises.push(
              fetchJokes(searchTerm, page).then(response => {
                const jokes = response?.results;
                if (jokes) {
                  jokes.forEach((joke: IJokeResponse) => {
                    if (!jokeIds.includes(joke.id)) {
                      fetchedJokes.push(joke);
                      jokeIds.push(joke.id);
                    }
                  });
                }
              })
            );
          }

          Promise.all(pagePromises)
            .then(() => {
              if (!data?.results.length) {
                setNoResult(true);
                displaySearch(fetchedJokes);
              } else {
                setNoResult(false);
                displaySearch(fetchedJokes);
              }
            })
            .catch(error => { setError(error.toString()) });
        } else {
          displaySearch(fetchedJokes);
        }
      })
      .catch(error => { setError(error.toString()) });
  }
}, [searchTerm]);

  const submitSearch = (event: ClickMouseEvent) => {
    event.preventDefault();
    setError('');
    setSearchTerm(term);
  }

  const clearSearch = (event: ClickMouseEvent) => {
    event.preventDefault();
    setTerm('');
    setSearchTerm('');
    setNoResult(false);
    setError('');
    displaySearch(undefined);
  }

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
        <button className='search-btn' disabled={btnDisable} onClick={submitSearch}>&#9906;</button>
        <button className='clear-btn' onClick={clearSearch}>X</button>
      </form>
      {noResult && <p className='no-result-msg'>Sorry! No funny business here, try searching again.</p>}
      {error && <Error error={error} />}
    </div>
  );
}

export default SearchBar;