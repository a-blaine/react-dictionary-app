import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import "./Dictionary.css";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    //documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word"
              autoFocus="off"
              autoComplete="off"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            suggested words: potato, act, goose, forest...
          </div>
        </section>
        <SearchResults results={result} />
      </div>
    );
  } else {
    load();
    return (
      <BarLoader
        color="#f8a26d"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
}
