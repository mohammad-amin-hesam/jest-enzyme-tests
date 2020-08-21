import React from "react";
import { shallow } from "enzyme";

import App from "./App";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // .dive gets our child component from our higher order component
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
