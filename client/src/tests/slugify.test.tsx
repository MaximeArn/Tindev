import { expect, describe, it } from "@jest/globals";
import slugify from "../utils/slugify";

describe("slugify utils function", () => {
  it("should return a slugified version of a string", () => {
    expect(slugify("Slugify me")).toBe("slugify-me");
  });

  it("should be truthy", () => {
    expect(slugify("Slugify me")).toBeTruthy();
  });
});
