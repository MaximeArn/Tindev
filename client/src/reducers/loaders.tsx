/** @format */

import { Loaders } from "../models/states";
import { LoadersActions } from "../models/actions";

const initialState: Loaders = {
  registerLoader: false,
  loginLoader: true,
};

const loaders = (state = initialState, { type }: LoadersActions) => {
  switch (type) {
    default:
      return state;
  }
};

export default loaders;
