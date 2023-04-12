import SearchBar from '../SearchBar/SearchBar';
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
      <h2>jokes will go here maybe someday</h2>
    </div>
  );
}

export default SearchPage;