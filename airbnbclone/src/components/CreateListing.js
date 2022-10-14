import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createListing } from "../actions/listings";
import Navbar from "./Navbar";

const CreateListing = () => {
  const [listingData, setListingData] = useState({
    name: "",
    description: "",
    city: "",
    address: "",
    postal_code: "",
    price: "",
    email: "",
    username: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createListing(listingData));
    console.log(listingData);
  };

  return (
    <div>
      <h1>Create Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) =>
            setListingData({ ...listingData, name: e.target.value })
          }
        />
        <input
          placeholder="Description"
          type="text"
          onChange={(e) =>
            setListingData({ ...listingData, description: e.target.value })
          }
        />
        <input
          placeholder="City"
          type="text"
          onChange={(e) =>
            setListingData({ ...listingData, city: e.target.value })
          }
        />
        <input
          placeholder="Address"
          type="text"
          onChange={(e) =>
            setListingData({ ...listingData, address: e.target.value })
          }
        />
        <input
          placeholder="Postal Code"
          type="text"
          onChange={(e) =>
            setListingData({ ...listingData, postal_code: e.target.value })
          }
        />
        <input
          placeholder="Price"
          type="number"
          onChange={(e) =>
            setListingData({ ...listingData, price: e.target.value })
          }
        />
        <input
          placeholder="Email"
          type="text"
          onChange={(e) =>
            setListingData({ ...listingData, email: e.target.value })
          }
        />
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;
