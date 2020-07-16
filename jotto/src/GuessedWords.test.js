import React from "react";
import { shallow } from "enzyme";
import GuessedWords from "./GuessedWords";
import { checkProps, findByTestAttr } from "../test/testUtils";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

// part 4 --- 2 finished --- 3 should be started
