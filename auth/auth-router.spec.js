const request = require("supertest");
const db = require("../database/dbConfig.js");
const server = require("../api/server.js");
// const authRouter = require("./auth-router");

describe("auth-router", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("GET /users", () => {
    it("should return status 200", async () => {
      let res = await request(server).get("/api/auth/users");
      expect(res.status).toBe(200);
    });

    it("should return array of all users", async () => {
      let res = await request(server).get("/api/auth/users");
      expect(res.body).toHaveLength(0);

      await db("users").insert({ username: "test1", password: "test1" });
      res = await request(server).get("/api/auth/users");
      expect(res.body).toHaveLength(1);
    });
  });
});
