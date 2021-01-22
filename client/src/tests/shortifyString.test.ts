import shortifyString from "../utils/shortifyString";

// test("should return a string shorter than 180 characters", () => {
//   expect(shortifyString("a short string")).toBe("a short string");

//   expect(
//     shortifyString(
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam harum sequi, quidem, nesciunt debitis facere laborum beatae iste consectetur officia laboriosam quia mollitia accusamus nisi vitae ipsa eligendi asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam harum sequi, quidem, nesciunt debitis facere laborum beatae iste consectetur officia laboriosam quia mollitia accusamus nisi vitae ipsa eligendi asperiores."
//     )
//   ).toHaveLength(180);

//   expect(typeof shortifyString("a string")).toBe("string");

//   expect(shortifyString("a string")).toBeTruthy;
// });

describe("shortifyString function", () => {
  it("should return same string if short", () => {
    expect(shortifyString("a short string")).toBe("a short string");
  });

  it("should return a shortified string if long", () => {
    expect(
      shortifyString(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam harum sequi, quidem, nesciunt debitis facere laborum beatae iste consectetur officia laboriosam quia mollitia accusamus nisi vitae ipsa eligendi asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam harum sequi, quidem, nesciunt debitis facere laborum beatae iste consectetur officia laboriosam quia mollitia accusamus nisi vitae ipsa eligendi asperiores."
      )
    ).toHaveLength(180);
  });

  it("should return a strin", () => {
    expect(typeof shortifyString("a string")).toBe("string");
  });

  it("should return a truthy value", () => {
    expect(shortifyString("a string")).toBeTruthy;
  });
});
