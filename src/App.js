import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./componets/movies";
import Customers from "./componets/customers";
import Rentals from "./componets/rentals";
import NotFound from "./componets/notFound";
import NavBar from "./componets/navBar";
import MovieForm from "./componets/movieForm";
import LoginForm from "./componets/loginForm";
import Logout from './componets/logout';
import RegisterForm from "./componets/registerForm";
import "react-toastify/dist/ReactToastify.css";
import auth from './services/authService';
import ProtectedRoute from './componets/common/protectedRoute';

import "./App.css";


class  App extends Component { 
state={};

componentDidMount(){   
  const user = auth.getCurrentUser();
  this.setState({user});
  
 }

  render(){ 
    const {user} = this.state;

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user}/>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <ProtectedRoute path="/movies/:id" component={MovieForm} />
          <Route path="/movies" 
             render={props => <Movies {...props} user={this.state.user} />} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}
}


export default App;
