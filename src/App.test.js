import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  //مشاهده کد به صورت رشته در کانسول
  // console.log(wrapper.debug());
  // باید درست باشه
  // expect(wrapper).toBeTruthy();
  // باید اشتباه باشه
  // expect(wrapper).toBeFalsy();
});

// Part of 1 finished :) Ready for part2
