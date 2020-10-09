import React from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

export const UnconnectedInput = (props) => {
  const { success, gaveUp } = props;

  const contents =
    success || gaveUp ? null : (
      <form>
        <input data-test="input-box" placeholder="enter guess" />
        <button data-test="submit-button">submit</button>
      </form>
    );

  return <div data-test="component-input">{contents}</div>;
};

export default connect((state) => state, { guessWord })(UnconnectedInput);
