const Users = require("./users-model");

const db = require("../database/dbConfig.js");

describe("users-model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("add", () => {
    it("should insert the provided user -- check length", async () => {
      await Users.add({ username: "test", password: "test" });
      await Users.add({ username: "test1", password: "test1" });
      await Users.add({ username: "test2", password: "test2" });
      const users = await db("users");
      expect(users).toHaveLength(3);
    });

    it("should insert the provided user -- check user returned", async () => {
      let user = await Users.add({ username: "test", password: "test" });
      expect(user.username).toBe("test");
      expect(user).toEqual({ id: 1, username: "test", password: "test" });
      user = await Users.add({ username: "hey", password: "hey" });
      expect(user.username).toBe("hey");
    });
  });

  describe("findById", () => {
    it("should return a specific user by the id", async () => {
      const user = await Users.add({ username: "test", password: "test" });
      const test = await Users.findById(user.id);
      const expected = { id: 1, username: "test", password: "test" };
      expect(test).toEqual(expected);
    });
  });
  it("should return undefined if the user by id doesnt exist", async () => {
    const user = await Users.findById(100);
    expect(user).toBeUndefined();
  });
});
