import React from "react";
// import tinyorganics from "./tinyorganics.jpeg";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <img
          className="hero-img"
          src="https://cdn.shopify.com/s/files/1/0018/4650/9667/files/referral-pop-up.jpg?v=1612200279"
          alt=""
        />
        <button className="get-started-btn">GET STARTED</button>
      </div>
    );
  }
}

export default Homepage;
