import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning({ data }) {
  return (
    <div className="Meaning">
      <h3>{data.partOfSpeech}</h3>
      <hr />
      {data.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <strong>Definition:</strong> {definition.definition}
            <br />
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
