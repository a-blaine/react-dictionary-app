import React from "react";
import Meaning from "./Meaning";
import "./SearchResults.css";

export default function SearchResults(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results text-start">
        <h2>
          {props.results.word}{" "}
          <span className="phonetic">{props.results.phonetic}</span>
        </h2>

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
