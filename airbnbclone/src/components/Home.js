import React from "react";
import Listing from "./Listing";
import Filter from "./Filter";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const listings = useSelector((state) => state.listings);
  console.log(listings);
  const [filter, setFilter] = useState("");
  const [user, setUser] = useState(null);
  // const [listings, setListings] = useState([
  //   {
  //     id: 1,
  //     name: "crazy condo",
  //     description: "condo listing",
  //     address: "123 condo street",
  //     city: "Toronto",
  //     postal_code: "L1E0B9",
  //     price: "3000",
  //     email: "useremail",
  //     username: "usernameofuser",
  //   },
  //   {
  //     id: 2,
  //     name: "humble house",
  //     description: "cottage listing",
  //     address: "321 cottage street",
  //     city: "Cottage",
  //     postal_code: "P0S1A1",
  //     price: "2999",
  //     email: "otheruseremail",
  //     username: "otherusername",
  //   },
  //   {
  //     id: 3,
  //     name: "agreeable apartment",
  //     description: "apartment listing",
  //     address: "321 apartment street",
  //     city: "Apartment",
  //     postal_code: "LAKSKD",
  //     price: "3001",
  //     email: "apartmentemail",
  //     username: "apartmentuser",
  //   },
  // ]);

  const listingsToShow =
    filter === ""
      ? listings
      : listings.filter(
          (listing) =>
            listing.name.toLowerCase().includes(filter) ||
            listing.city.toLowerCase().includes(filter) ||
            listing.address.toLowerCase().includes(filter) ||
            listing.postal_code.toLowerCase().includes(filter)
        );

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="homepage">
      <div>This is the landing page</div>
      <div>
        <Filter value={filter} onChange={handleFilter} />
      </div>
      <div>
        {listingsToShow.map((listing, key) => (
          <Listing
            key={listing.name}
            name={listing.name}
            description={listing.description}
            address={listing.address}
            city={listing.city}
            postal_code={listing.postal_code}
            price={listing.price}
            email={listing.email}
            username={listing.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
