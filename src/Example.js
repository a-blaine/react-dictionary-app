import React from "react";

export default function Example({ example }) {
  if (example) {
    return (
      <span>
        Example: <em>{example}</em>
      </span>
    );
  } else {
    return null;
  }
}
