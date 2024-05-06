import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

function Register() {
  const [password, setPasword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/user/register`, {
        email,
        password,
        name,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      navigate('/login')
    } catch (err) {
      console.log(err);
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
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="name"
          id="name"
          placeholder="name"
          value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
        <button type="button" onClick={() => signup()}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
