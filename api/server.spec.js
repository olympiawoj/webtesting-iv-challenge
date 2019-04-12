const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("sanity check", () => {
    it("should return status 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });
});
