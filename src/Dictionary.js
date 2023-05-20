import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <section>
        <form onSubmit={search}>
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
}
