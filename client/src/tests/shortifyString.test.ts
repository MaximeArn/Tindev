import shortifyString from "../utils/shortifyString";

test("should return a string shorter than 180 characters", () => {
  expect(shortifyString("a short string")).toBe("a short string");

  expect(
    shortifyString(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam harum sequi, quidem, nesciunt debitis facere laborum beatae iste consectetur officia laboriosam quia mollitia accusamus nisi vitae ipsa eligendi asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam harum sequi, quidem, nesciunt debitis facere laborum beatae iste consectetur officia laboriosam quia mollitia accusamus nisi vitae ipsa eligendi asperiores."
    )
  ).toHaveLength(180);
});
