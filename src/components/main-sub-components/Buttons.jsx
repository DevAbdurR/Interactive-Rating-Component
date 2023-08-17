import React from "react";

function Buttons({ handleRating, activeIndex, submit }) {
  return (
    <>
      <div className="btn-container">
        <div className="rating-btn-container">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleRating(index)}
                className={`rating-btn text-gray ${
                  activeIndex === index ? "rating-btn-active" : ""
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          <button onClick={submit} className="submit-btn text-white">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
