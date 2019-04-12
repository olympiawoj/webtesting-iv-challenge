const request = require("supertest");

const server = require("../api/server.js");

describe("server.js", () => {
  describe("sanity check", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
  //   describe("GET /users", () => {
  //     it("should respond with 200 OK", async (req, res) => {
  //       const response = await request(server).get("/auth/api/users");
  //       expect(response.status).toBe(200);
  //     });
  //   });
});
