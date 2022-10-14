const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
  bookedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
});

bookingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id, delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
