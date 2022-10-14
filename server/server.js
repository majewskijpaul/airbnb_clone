require("dotenv").config;
const express = require("express");
const usersRouter = require("./controllers/users");
const listingsRouter = require("./controllers/listings");
const bookingsRouter = require("./controllers/bookings");
const Listing = require("./models/listing");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
const loginRouter = require("./controllers/login");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

let listings = [
  {
    id: 1,
    name: "crazy condo",
    description: "condo listing",
    address: "123 condo street",
    city: "Toronto",
    postal_code: "L1E0B9",
    price: "3000",
    email: "useremail",
    username: "usernameofuser",
  },
  {
    id: 2,
    name: "humble house",
    description: "cottage listing",
    address: "321 cottage street",
    city: "Cottage",
    postal_code: "P0S1A1",
    price: "2999",
    email: "otheruseremail",
    username: "otherusername",
  },
  {
    id: 3,
    name: "agreeable apartment",
    description: "apartment listing",
    address: "321 apartment street",
    city: "Apartment",
    postal_code: "LAKSKD",
    price: "3001",
    email: "apartmentemail",
    username: "apartmentuser",
  },
];

const CONNECTION_URL = `mongodb+srv://airbnbclone:${process.env.password}@airbnbclone.sibbzg6.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log("Error connecting to MongoDB", error.message));

app.use("/api/users", usersRouter);
app.use("/api/listings", listingsRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/login", loginRouter);

app.get("/api/listings", (request, response) => {
  Listing.find({}).then((result) => {
    result.forEach((listings) => {
      response.json(listings);
    });
  });
});

app.get("/api/listings/:id", (request, response) => {
  const id = Number(request.params.id);
  const listing = listings.find((listing) => listing.id === id);

  if (listing) {
    response.json(listing);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/listings/:id", (request, response) => {
  const id = Number(request.params.id);
  listings = listings.filter((listing) => listing.id !== id);
  response.status(204).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
