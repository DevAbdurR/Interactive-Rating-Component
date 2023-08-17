import "./App.css";
import Main from "./components/Main";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRating(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="container">
        {isSubmitted ? (
          <ThankYou selectedRating={activeIndex} />
        ) : (
          <Main
            submit={handleSubmit}
            handleRating={handleRating}
            activeIndex={activeIndex}
          />
        )}
      </div>
    </>
  );
}

export default App;
