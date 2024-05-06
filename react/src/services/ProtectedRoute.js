import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Private({ children }) {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));  
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!auth) {
        navigate("/login");
      }
    }, [navigate]);
    return children;
  }
