import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, setToken } from "../api/index.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await login({
        username,
        password,
      });

      window.localStorage.setItem("token", user.data.token);
      console.log(JSON.stringify(user));
      console.log(user.data.token);
      setToken(user.data.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      window.alert("invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          value={username}
          placeholder="Username"
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        ></input>
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      <button>Log In</button>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Login;
