const Users = require("./users-model");

const db = require("../database/dbConfig.js");

describe("users-model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert", () => {
    it("should insert the provided user -- check length", async () => {
      //   await Users.insert({ username: "test", password: "test" });
      //   const users = await db("users");
      //   expect(users).toHaveLength(1);
    });
  });
});
