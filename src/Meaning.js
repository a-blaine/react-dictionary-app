import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning({ data }) {
  return (
    <div className="Meaning">
      <h3>{data.partOfSpeech}</h3>
      <hr />
      {data.definitions.map((definition, index) => {
        return (
          <div key={index} className="definition-wrapper">
            <div className="definition">{definition.definition}</div>
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
