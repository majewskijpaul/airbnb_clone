const listingsRouter = require("express").Router();
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Booking = require("../models/booking");
const Listing = require("../models/listing");

const getTokenFrom = (request) => {
  const authorization = request.get("Authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

listingsRouter.get("/", async (request, response) => {
  try {
    const listings = await Listing.find();
    response.status(200).json(listings);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

listingsRouter.post("/", async (request, response) => {
  const body = request.body;
  console.log(request.get("Authorization"));
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: "tokken missing or invalid" });
  }

  const user = await User.findById(body.userId);

  const listing = new Listing({
    name: body.name,
    description: body.description,
    city: body.city,
    address: body.address,
    postal_code: body.postal_code,
    price: body.price,
    email: body.email,
    username: body.username,
    user: user._id,
  });

  const savedListing = await listing.save();
  user.listings = user.listings.concat(savedListing._id);
  await user.save();

  response.json(savedListing);
});

module.exports = listingsRouter;
