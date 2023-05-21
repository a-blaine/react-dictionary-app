import React from "react";

export default function Photos({ photos, keyword }) {
  if (photos) {
    return (
      <section className="Photos">
        <div className="row">
          {photos.map((photo, index) => {
            return (
              <div className="col-3" key={index}>
                <img
                  src={photo.src.landscape}
                  alt={keyword}
                  className="img-fluid"
                />
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
