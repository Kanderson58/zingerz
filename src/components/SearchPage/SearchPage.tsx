import { useState } from 'react'
import Joke from '../Joke/Joke';
import SearchBar from '../SearchBar/SearchBar';
import { SearchResponse } from '../../interfaces';
import './SearchPage.css';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<SearchResponse | null>(null);

  const displaySearch = (result: SearchResponse | null) => {
    setSearchResult(result);
  }

  return (
    <div className='search-page'>
      <SearchBar displaySearch={displaySearch} />
      <div className='all-jokes'>
        {searchResult && searchResult.results.map(result => <Joke key={result.id} class='search-joke' data={result}/>)}
      </div>
    </div>
  );
}

export default SearchPage;