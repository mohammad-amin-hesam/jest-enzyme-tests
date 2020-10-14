import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./test/testUtils";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  // use mount, because useeEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");

  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // wrapper.update() doesn't trigger update
    // https://github.com/airbnb/enzyme/issues/2091
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
