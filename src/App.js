import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginFrom from "./components/loginForm";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginFrom} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
