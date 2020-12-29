const { describe, expect, it } = require("@jest/globals");
const supertest = require("supertest");
const app = require("../start");
const request = supertest(app);

describe("create user endpoint", () => {
  it("should return a 200 status", async () => {
    const response = await request.post("/auth/register").send({
      username: "User1",
      email: "user1@gmail.com",
      password: "user1",
      confirmPassword: "user1",
    });
    expect(response.status).toEqual(200);
  });
});
