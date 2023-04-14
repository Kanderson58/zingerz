import { useState } from 'react'
import Joke from '../Joke/Joke';
import SearchBar from '../SearchBar/SearchBar';
import { ISearchResponse, IJokeResponse } from '../../interfaces';
import './SearchPage.css';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<IJokeResponse[] | undefined>(undefined);

  const displaySearch = (result: IJokeResponse[] | undefined) => {
    setSearchResult(result);
  }

  return (
    <div className='search-page'>
      <SearchBar displaySearch={displaySearch} />
      <div className='all-jokes'>
        {searchResult && searchResult.map(result => <Joke key={result.id} data={result}/>)}
      </div>
    </div>
  );
}

export default SearchPage;