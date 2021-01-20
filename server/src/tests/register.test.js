const { describe, expect, it, afterAll } = require("@jest/globals");
const { server } = require("../server");
const request = require("supertest")(server);
const { disconnect } = require("mongoose");

describe("create user endpoint", () => {
  afterAll(() => disconnect());

  it("should return a 200 status with a json success message", async (done) => {
    try {
      const { status, body } = await request.post("/auth/register").send({
        username: "User13",
        email: "user13@gmail.com",
        password: "user13",
        confirmPassword: "user13",
      });

      expect(status).toEqual(200);
      expect(body).toHaveProperty(
        "msg",
        "An email has been sent to your email address"
      );

      done();
    } catch (error) {
      done(error);
    }
  });
});
