import capitalize from "../utils/capitalizeFirstLetter";

test("take a string and capitalize the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("a long sentence with a lot of words")).toBe(
    "A Long Sentence With A Lot Of Words"
  );
});
