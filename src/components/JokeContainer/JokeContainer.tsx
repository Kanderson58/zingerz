import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './JokeContainer.css';

function JokeContainer() {
  return (
    <div className='joke-containter'>
      <h2>JokeContainer</h2>
      <SearchBar />
      {/* jokes will go here maybe someday */}
    </div>
  );
}

export default JokeContainer;