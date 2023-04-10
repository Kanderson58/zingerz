import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './JokeContainer.css';

function JokeContainer() {
  return (
    <div className='joke-container'>
      <SearchBar />
      <h2>jokes will go here maybe someday</h2>
    </div>
  );
}

export default JokeContainer;