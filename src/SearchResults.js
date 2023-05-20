import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="Results text-start">
        <section>
          <h2>{props.results.word} </h2>
          <hr />
          {props.results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning data={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
