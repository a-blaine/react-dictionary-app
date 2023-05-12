import React from "react";

export default function Meaning({ data }) {
  return (
    <div className="Meaning">
      <h3>{data.partOfSpeech}</h3>
      {data.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
