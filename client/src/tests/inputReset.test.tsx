import inputReset from "../utils/resetInputs";
import { expect, describe, it } from "@jest/globals";

describe("reset input values utils function", () => {
  it("should reset every values to an empty string", () => {
    expect(inputReset({ a: "a", b: "b", c: "c" })).toEqual({
      a: "",
      b: "",
      c: "",
    });
  });
});
