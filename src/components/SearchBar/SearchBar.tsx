import React, { useState, useEffect } from "react";
import { fetchSearch } from "../../apiCalls";
import "./SearchBar.css";
import { SearchResponse } from "../../apiCalls";
import Error from "../Error/Error";

type Event = React.ChangeEvent<HTMLInputElement>;
type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type Props = {
  displaySearch: (result: SearchResponse | null) => void;
};

const SearchBar = ({ displaySearch }: Props) => {
  const [term, setTerm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [noResult, setNoResult] = useState<boolean>(false);

  useEffect(() => {
    setBtnDisable(!term);
  }, [term]);

  const searchJokes = (event: ClickEvent) => {
    setError("");
    event.preventDefault();
    fetchSearch(term)
      .then((data) => {
        if (!data?.results.length) {
          setNoResult(true);
          displaySearch(data);
        } else {
          setNoResult(false);
          displaySearch(data);
        }
      })
      .catch((error) => setError(error.toString()));
  };


  const clearSearch = (event: ClickEvent) => {
    event.preventDefault();
    setTerm("");
    setNoResult(false);
    setError("");
  };

  return (
    <div className="search-form">
      <form>
        <input
          type="text"
          name="term"
          placeholder="Search jokes"
          value={term}
          onChange={(event: Event) => setTerm(event.target.value)}
        />
        <button className="search-btn" disabled={btnDisable} onClick={searchJokes}>&#9906;</button>
        <button className="clear-btn" onClick={clearSearch}>X</button>
      </form>
      {noResult && (<p className="no-result-msg">Sorry! No funny business here, try searching again.</p>)}
      {error && <Error error={error} />}
    </div>
  );
};

export default SearchBar;
