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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [noResult, setNoResult] = useState<boolean>(false);
  const [allJokes, setAllJokes] = useState<IJokeResponse[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setBtnDisable(!term)
  }, [term])

useEffect(() => {
  if (searchTerm !== "") {
    fetchSearch(searchTerm)
      .then((data) => {
        let totalPages = data?.total_pages;
        let fetchedJokes: IJokeResponse[] = [];
        let jokeIds = new Set<string>();

        if (totalPages) {
          const pagePromises = [];
          for (let page = 1; page <= totalPages; page++) {
            pagePromises.push(
              fetchSearch(searchTerm, page).then((response) => {
                const jokes = response?.results;
                if (jokes) {
                  jokes.forEach((joke) => {
                    if (!jokeIds.has(joke.id)) {
                      fetchedJokes.push(joke);
                      jokeIds.add(joke.id);
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
            .catch((error) => {
              if (error instanceof Error) {
                setError(String(error));
              }
            });
        } else {
          displaySearch(fetchedJokes);
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(String(error));
        }
      });
  }
}, [searchTerm]);

  const submitSearch = (event: ClickMouseEvent) => {
    event.preventDefault();
    setError('');
    setSearchTerm(term)
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