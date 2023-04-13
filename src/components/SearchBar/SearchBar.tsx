import React, { useState, ChangeEvent } from 'react';
import { fetchSearch } from '../../apiCalls';
import './SearchBar.css';
import { SearchResponse } from '../../apiCalls';
import Error from '../Error/Error';

type Event = ChangeEvent<HTMLInputElement>
type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
type Props = {
  displaySearch: (result: SearchResponse | null) => void
}

const SearchBar = ({ displaySearch }: Props) => {
  const [term, setTerm] = useState('')
  const [error, setError] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)

  const searchJokes = (event: ClickEvent) => {
    setError('');
    event.preventDefault();
    fetchSearch(term)
      .then(data => {
        displaySearch(data);
      })
      .catch(error => setError(error.toString()))
  }

  const handleTermChange = (event: Event) => {
    setTerm(event.target.value)
    setBtnDisable(!event.target.value)
  }

  return (
    <div className='search-form'>
      <form>
        <input
        type='text' 
        name='term' 
        placeholder='Search jokes' 
        value={term} 
        onChange={handleTermChange} 
      />
      <button className='search-btn' disabled={btnDisable} onClick={searchJokes}>&#9906;</button>
      <button className='clear-btn'>X</button>
      </form>
      {error && <Error error={error} />}
    </div>
  );
}

export default SearchBar;