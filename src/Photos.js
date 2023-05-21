import React from "react";
import "./Photos.css";

export default function Photos({ photos, keyword }) {
  if (photos) {
    return (
      <section className="Photos">
        <div className="row">
          {photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={keyword}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
