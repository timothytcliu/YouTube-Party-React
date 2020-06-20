import React, { Component } from "react";
import HomePage from "./components/HomePage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HomePage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;