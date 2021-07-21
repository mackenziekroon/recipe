import React from "react";
import ReactDOM from "react-dom";
// import "bootswatch/dist/minty/bootstrap.min.css";
import Header from "./layout/Header";
import Homepage from "./layout/Homepage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
