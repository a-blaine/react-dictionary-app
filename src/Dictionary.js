import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import "./Dictionary.css";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryApiResponse(response) {
    setResult(response.data[0]);
  }

  function handlePhotosApiResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryApiResponse);

    const photosApiKey = `tf30f1b7o15235243ac5cab1dc2f9454`;
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePhotosApiResponse);
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
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
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
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return (
      <div className="d-flex">
        <div className="sync-loader">
          <BarLoader
            color="#f8a26d"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
}
