import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(
    Boolean(localStorage.getItem("token")),
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedin(false);
    nav("/login", { replace: true });
  };
  return (
    <>
      Home
      <nav>
        <Link to="/about">
          <button>about</button>
        </Link>
        <Link to="/services">
          <button>services</button>
        </Link>
        {isLoggedin ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>login</button>
          </Link>
        )}
      </nav>
    </>
  );
};

export default Home;
