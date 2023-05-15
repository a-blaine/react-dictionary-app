import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="Results text-start">
        <h2>{props.results.word} </h2>

        {props.results.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetic} />
            </div>
          );
        })}
        <hr />

        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
