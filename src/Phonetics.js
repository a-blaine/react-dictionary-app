import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetics({ phonetics }) {
  return (
    <div className="Phonetics">
      <a href={phonetics.audio} rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={faVolumeHigh} />
      </a>{" "}
      <span>{phonetics.text}</span>
    </div>
  );
}
