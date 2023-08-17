import React from "react";
import { ReactComponent as Image } from "../assets/images/illustration-thank-you.svg";
import Rating from "./thankyou-sub-components/Rating";
import ThankyouText from "./thankyou-sub-components/ThankyouText";

function ThankYou({ selectedRating }) {
  return (
    <div className="thankyou-component">
      <Image />
      <Rating selectedRating={selectedRating} />
      <ThankyouText />
    </div>
  );
}

export default ThankYou;
