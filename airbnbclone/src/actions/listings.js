import * as api from "../api";

export const getListings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchListings();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createListing = (listing) => async (dispatch) => {
  try {
    const { data } = await api.createListing(listing);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
