import React from "react";
import { render } from "@testing-library/react";

const sum = (a: number, b: number) => a + b;

test("it should add 1 to the default value", () => {
  expect(sum(1, 2)).toBe(3);
});
