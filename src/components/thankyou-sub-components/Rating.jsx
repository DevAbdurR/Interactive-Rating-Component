import React from "react";

function Rating({ selectedRating }) {
  return (
    <div className="rating">
      <p>You selected {selectedRating + 1} out of 5</p>
    </div>
  );
}

export default Rating;
