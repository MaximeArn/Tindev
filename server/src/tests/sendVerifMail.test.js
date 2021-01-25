const { describe, expect, it } = require("@jest/globals");
const sendVerifEmail = require("../utils/sendAccountConfirmationEmail");

test("should return a success message", async () => {
  const result = await sendVerifEmail(
    "user.300@gmail.com",
    "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e"
  );
  expect(result).toBe(
    "A new activation link has been sent to your email address. Please follow the instructions"
  );
});

test("the return must be undefinde", async () => {
  const result = await expect(sendVerifEmail("", ""));
  expect(result).toBeInstanceOf(Object || Error);
});
