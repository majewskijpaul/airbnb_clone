import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    admin: true,
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    console.log(userData);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={userData.username}
          placeholder="Username"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        ></input>
        <input
          value={userData.firstname}
          placeholder="First Name"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        ></input>
        <input
          value={userData.lastname}
          placeholder="Last Name"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        ></input>
        <input
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="E-mail"
          type="text"
        ></input>
        <input
          value={userData.password}
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></input>
        <select defaultValue="admin">
          <option onChange={(e) => setUserData({ ...userData, admin: true })}>
            Admin
          </option>
          <option
            onChange={(e) => setUserData({ ...userData, admin: false })}
            value="customer"
          >
            Customer
          </option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
