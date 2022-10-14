require("dotenv").config();
const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

usersRouter.post("/", async (request, response) => {
  const { username, firstname, lastname, email, password, admin } =
    request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    username,
    firstname,
    lastname,
    email,
    passwordHash,
    admin,
  });

  console.log(newUser);

  try {
    await newUser.save();

    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
});

module.exports = usersRouter;
