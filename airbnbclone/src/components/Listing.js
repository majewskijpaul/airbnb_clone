import React from "react";
import "./Listing.css";

const Listing = ({
  name,
  description,
  address,
  city,
  postal_code,
  price,
  email,
  username,
}) => {
  return (
    <div className="listinginfo">
      <h1>{name}</h1>
      <h3>description: {description}</h3>
      <h3>city: {city}</h3>
      <p>address: {address}</p>
      <p>postal_code: {postal_code}</p>
      <p>price: {price}</p>
      <p>email: {email}</p>
      <p>username: {username}</p>
    </div>
  );
};

export default Listing;
