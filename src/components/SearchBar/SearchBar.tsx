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
  const [term, setTerm] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [btnDisable, setBtnDisable] = useState<boolean>(true)
  const [noResult, setNoResult] = useState<boolean>(false)

  const searchJokes = (event: ClickEvent) => {
    setError('');
    event.preventDefault();
    fetchSearch(term)
      .then(data => {
        if(data?.results.length === 0) {
          setNoResult(true)
        } else {
          setNoResult(false)
          displaySearch(data);
        }
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
      {noResult && <p className='no-result-msg'>Sorry! No funny business here, try searching again. </p>}
      {error && <Error error={error} />}
    </div>
  );
}

export default SearchBar;