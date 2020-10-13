import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      <form>
        <input
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          data-test="input-box"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
