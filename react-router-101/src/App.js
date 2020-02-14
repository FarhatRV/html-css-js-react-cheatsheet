import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Route
} from "react-router-dom";

import "./App.css";

const User = props => {
  console.log(props.fullLocation);
  return <h1> Welcome User {props.fullLocation.match.params.username} </h1>;
};

const Home = () => {
  return <h1>Welcome Home</h1>;
};

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <ul className="list">
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about1" exact activeStyle={{ color: "green" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/john?param1=value1"
              exact
              activeStyle={{ color: "green" }}
            >
              User John
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/peter" exact activeStyle={{ color: "green" }}>
              User Peter
            </NavLink>
          </li>
        </ul>
        <Prompt
          when={!loggedIn}
          message={location => {
            return location.pathname.startsWith("/user")
              ? "Please login first"
              : true;
          }}
        />

        <input
          type="button"
          value={loggedIn ? "log out" : "log in"}
          onClick={() => setLoggedIn(!loggedIn)}
        />

        <Route path="/" exact component={Home} />
        <Route
          path="/about1"
          exact
          render={() => {
            return <h1>Welcome About</h1>;
          }}
        />
        <Route
          path="/user/:username"
          exact
          render={props =>
            loggedIn ? <User fullLocation={props} /> : <Redirect to="/" />
          }
        />
      </div>
    </Router>
  );
};

export default App;
