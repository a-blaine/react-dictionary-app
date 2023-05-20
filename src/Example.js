import React from "react";
import "./Example.css";

export default function Example({ example }) {
  if (example) {
    return <div className="Example">{example}</div>;
  } else {
    return null;
  }
}
