const { describe, expect, it } = require("@jest/globals");
const comparePassword = require("../utils/comparePasswords");

describe("compare password function", () => {
  it("should return false if the passwords are not matching", () => {
    expect(
      comparePassword({ password: "password", confirmPassword: "password2" })
    ).toEqual(false);
  });

  it("should return true if the passwords are matching", () => {
    expect(
      comparePassword({ password: "password", confirmPassword: "password" })
    ).toEqual(true);
  });
});
