import React, { useState, ChangeEvent } from 'react';
import { fetchSearch } from '../../apiCalls';
import './SearchBar.css';
import { SearchResponse } from '../../apiCalls';

type Event = ChangeEvent<HTMLInputElement>
type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
type Props = {
  displaySearch: (result: SearchResponse | null) => void
}

const SearchBar = ({ displaySearch }: Props) => {
  const [term, setTerm] = useState('')

  const searchJokes = (event: ClickEvent) => {
    event.preventDefault();
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
      <button className='search-btn' onClick={(event: ClickEvent) => searchJokes(event)}>&#9906;</button>
      <button className='clear-btn'>X</button>
    </form>
  );
}

export default SearchBar;