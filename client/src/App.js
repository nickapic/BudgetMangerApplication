import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./page/home";
import { Login } from "./page/login";
import { Register } from "./page/register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
