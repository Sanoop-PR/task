import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/login.css'


function Login() {
  const [email, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/user/login`, {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      navigate("/simple-button");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <form>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => login()}>
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
