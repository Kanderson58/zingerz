import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = () => {
  const [search, setSearch] = useState('')


  return (
    <form>
      <input type='text' name='search' placeholder='Search jokes' />
    </form>
  );
}

export default SearchBar;