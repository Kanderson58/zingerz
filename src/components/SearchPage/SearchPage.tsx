import SearchBar from '../SearchBar/SearchBar';
import Joke from '../Joke/Joke';
import './SearchPage.css';
import { SearchResponse } from '../../apiCalls';
import { useState } from 'react'



const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<SearchResponse | null>(null);

  const displaySearch = (result: SearchResponse | null) => {
    setSearchResult(result);
    console.log(result)
  }

  return (
    <div className='search-page'>
      <SearchBar displaySearch={displaySearch} />
      {searchResult && searchResult.results.map(result => <Joke data={result}/>)}
    </div>
  );
}

export default SearchPage;