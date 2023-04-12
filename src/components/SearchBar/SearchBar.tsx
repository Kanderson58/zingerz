import React, { useState, ChangeEvent, FC } from 'react';
import { fetchSearch } from '../../apiCalls';
import './SearchBar.css';
import { SearchResponse } from '../../apiCalls';
import Joke from '../Joke/Joke';

type Event = ChangeEvent<HTMLInputElement>
type clickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>



const SearchBar: Function = (displaySearch: Function) => {
  const [term, setTerm] = useState('')
  // const [searchResult, setSearchResult] = useState<SearchResponse | null>(null)

  const searchJokes = (event: clickEvent) => {
    event.preventDefault();
    console.log('INSIDE SEARCH JOKES')
    fetchSearch(term)
      .then(data => {
        displaySearch(data);
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