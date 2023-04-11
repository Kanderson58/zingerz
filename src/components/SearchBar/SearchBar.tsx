import React, { useState, ChangeEvent } from 'react';
import { fetchSearch } from '../../apiCalls';
import './SearchBar.css';
import { SearchResponse } from '../../apiCalls';
import Joke from '../Joke/Joke';

type Event = ChangeEvent<HTMLInputElement>
type clickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

const SearchBar = () => {
  const [term, setTerm] = useState('')
  // const [searchResult, setSearchResult] = useState<SearchResponse | null>(null)

  const searchJokes = (event: clickEvent) => {
    event.preventDefault();
    fetchSearch(term)
      .then(data => {
        setSearchResult(data);
      })
  }

  return (
    <form>
      <input
        type='text' 
        name='term' 
        placeholder='Search jokes' 
        value={term} 
        onChange={(event: Event) => setTerm(event.target.value)} 
      />
      <button className='search-btn' onClick={(event: clickEvent) => searchJokes(event)}>🔍</button>

      {/* {searchResult && searchResult.results.map(result => <Joke data={result}/>)} */}
    </form>
  );
}

export default SearchBar;