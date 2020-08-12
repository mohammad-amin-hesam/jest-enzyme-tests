import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { storeFactory } from "../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    it("renders component without error", () => {});
    it("renders input box", () => {});
    it("renders submit button", () => {});
  });
  describe("word has been guessed", () => {
    it("renders component without error", () => {});
    it("does not renders input box", () => {});
    it("does not renders submit button", () => {});
  });
});

describe("update state", () => {});
