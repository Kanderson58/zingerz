import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type='text' name='search' placeholder='Search jokes' />
      </form>
    );
  }
}

export default SearchBar;