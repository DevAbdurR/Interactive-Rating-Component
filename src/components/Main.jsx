import React from "react";
import Star from "./main-sub-components/Star";
import Text from "./main-sub-components/Text";
import Buttons from "./main-sub-components/Buttons";

function Main({ handleRating, activeIndex, submit }) {
  return (
    <>
      <div className="main-component">
        <Star />
        <Text />
        <Buttons
          submit={submit}
          handleRating={handleRating}
          activeIndex={activeIndex}
        />
      </div>
    </>
  );
}

export default Main;
