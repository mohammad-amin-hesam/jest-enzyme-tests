import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { storeFactory, findByTestAttr } from "../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // .dive gets our child component from our higher order component
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    it("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    it("does not renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const store = storeFactory({ success });
    const wrapper = shallow(<Input store={store} />).dive();
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });

  it("`guessWord` action creator is a function prop", () => {
    const store = storeFactory();
    const wrapper = shallow(<Input store={store} />).dive();
    const guessWordProp = wrapper.props().guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
