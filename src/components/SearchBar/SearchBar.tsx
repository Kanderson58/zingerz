import React, { useState, ChangeEvent } from 'react';
import { fetchSearch } from '../../apiCalls';
import './SearchBar.css';

type Event = ChangeEvent<HTMLInputElement>
type clickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

const SearchBar = () => {
  const [term, setTerm] = useState('')
  //need to create error state

  const searchJokes = (event: clickEvent) => {
    event.preventDefault();
    fetchSearch(term)
      .then(data => console.log(data))
      //need to make catch
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
      <button className='clear-btn' onClick={(event: clickEvent) => searchJokes(event)}>X</button>
    </form>
  );
}

export default SearchBar;