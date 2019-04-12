const router = require("express").Router();
const Users = require("../users/users-model.js");

//REGISTER or CREATE
router.post("/register", async (req, res) => {
  let user = req.body;
  console.log(user);

  if (!user.username || !user.password) {
    return res
      .status(401)
      .json({ message: "Submit both username and password when registering" });
  }
  try {
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error registering." });
  }
});

//GET USERS
router.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error getting users" });
  }
});

//DELETE USER
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const deletedUser = await Users.remove(id);
    if (deletedUser) {
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting user" });
  }
});

module.exports = router;
