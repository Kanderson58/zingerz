import React, { useState, ChangeEvent } from 'react';
import './SearchBar.css';

type Event = ChangeEvent<HTMLInputElement>

const SearchBar = () => {
  const [search, setSearch] = useState('')


  return (
    <form>
      <input
        type='text' 
        name='search' 
        placeholder='Search jokes' 
        value={search} 
        onChange={(event: Event) => setSearch(event.target.value)} 
      />
    </form>
  );
}

export default SearchBar;