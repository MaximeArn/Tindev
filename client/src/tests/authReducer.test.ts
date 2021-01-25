import { expect, describe, it } from "@jest/globals";
import authReducer, { initialState } from "../reducers/auth";

const state = {
  login: {
    email: "",
    password: "",
  },
  user: {
    firstName: "Anthony",
    lastName: "Motto",
  },
};

describe("auth reducer", () => {
  it("should be a function", () => {
    expect(authReducer).toBeInstanceOf(Function);
  });

  it("should return initialState if the first parameter is falsy", () => {
    expect(authReducer(undefined, {})).toBe(initialState);
  });

  it("should return an unchanged state if an empty action is given", () => {
    expect(authReducer(state, {})).toBe(state);
  });
});

describe("auth reducer actions", () => {
  it("should return a modified version of the state if an action is given", () => {
    expect(
      authReducer(initialState, {
        type: "CONNECT_USER",
        credentials: { email: "krysyx@gmail.com", username: "Krysyx" },
      })
    ).not.toEqual(initialState);
  });
});
