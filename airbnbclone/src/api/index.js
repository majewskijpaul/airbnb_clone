import axios from "axios";

const listingsUrl = "http://localhost:5000/api/listings";
const usersUrl = "http://localhost:5000/api/users";
const bookingsUrl = "http://localhost:5000/api/bookings";
const loginUrl = "http://localhost:5000/api/login";

let token = null;

export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const config = { headers: { Authorization: token } };

export const fetchListings = () => axios.get(listingsUrl);

export const createListing = (newListing) =>
  axios.post(listingsUrl, newListing, config);

export const fetchUsers = () => axios.get(usersUrl);

export const createUser = (newUser) => axios.post(usersUrl, newUser);

export const login = (credentials) => axios.post(loginUrl, credentials);
