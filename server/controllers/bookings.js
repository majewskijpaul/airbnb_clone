const bookingsRouter = require("express").Router();

const User = require("../models/user");
const Booking = require("../models/booking");
const Listing = require("../models/listing");

bookingsRouter.get("/", (request, response) => {
  response.send("This works!");
});

module.exports = bookingsRouter;
