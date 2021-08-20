import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <Header />
        <div className="hero"></div>
        <Link to="/form">
          <button className="get-started-btn">GET STARTED</button>
        </Link>
      </div>
    );
  }
}

export default Homepage;
