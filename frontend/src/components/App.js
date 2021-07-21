import React from "react";
import ReactDOM from "react-dom";
// import "bootswatch/dist/minty/bootstrap.min.css";
import Header from "./layout/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Content</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
