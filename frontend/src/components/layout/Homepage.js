import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
// import tinyorganics from "./tinyorganics.jpeg";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <Header />
        <img
          className="hero-img"
          src="https://cdn.shopify.com/s/files/1/0018/4650/9667/files/referral-pop-up.jpg?v=1612200279"
          alt=""
        />
        <Link to="/form">
          <button className="get-started-btn">GET STARTED</button>
        </Link>
      </div>
    );
  }
}

export default Homepage;
