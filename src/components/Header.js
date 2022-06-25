import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui pointing menu container">
          <Link className="item" to="/about">
            Streamer
          </Link>
          <div className="right menu">
            <Link to="/" className="item">
              Streams
            </Link>
          </div>
          <GoogleAuth />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
