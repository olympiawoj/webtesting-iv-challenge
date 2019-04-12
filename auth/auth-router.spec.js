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

  describe("POST /api/auth/register", () => {
    it("should return status 201", async () => {
      const newUser = { username: "test1", password: "test1" };
      let response = await request(server)
        .post("/api/auth/register")
        .send(newUser);
      expect(response.status).toBe(201);
    });

    it("returns status 401 if username or password is missing", async () => {
      const newUser = { username: "test" };
      let response = await request(server)
        .post("/api/auth/register")
        .send(newUser);
      expect(response.status).toBe(401);
    });
  });

  describe("DELETE /api/auth/users/:id", () => {
    it("should return status 204", async () => {
      //first insert
      const newUser = { username: "test", password: "test" };
      let response = await request(server)
        .post("/api/auth/register")
        .send(newUser);
      //then delete
      response = await request(server).delete("/api/auth/users/1");
      expect(response.status).toBe(204);
      response = await request(server).get("/api/auth/users");
      expect(response.body).toHaveLength(0);
    });
  });
});
