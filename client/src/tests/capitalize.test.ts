import capitalize from "../utils/capitalizeFirstLetter";

test("take a string and capitalize the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});
