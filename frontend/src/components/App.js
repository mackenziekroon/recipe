import React from "react";
import ReactDOM from "react-dom";
// import "bootswatch/dist/minty/bootstrap.min.css";
import Header from "./layout/Header";
import Homepage from "./layout/Homepage";
import { Provider } from "react-redux";
import store from "../store";
import Recipes from "./layout/Recipes";
import Routes from "./layout/Routes";
import Form from "./layout/Form";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
