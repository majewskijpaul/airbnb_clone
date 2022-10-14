const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postal_code: { type: String, required: true },
  price: { type: Number, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
});

listingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id, delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Listing", listingSchema);
