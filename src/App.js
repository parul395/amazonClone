import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import FlipMove from "react-flip-move";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51IvGw9SHOyNzMzBmihayWPrrEvDHUxwtG0qV5ByzjuNcewMo4D8LFHSQH9RU2RdTSYbiVBSKmehtDGzLfyOKRCYs00k60ra1DV"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        //user just loggin or was login

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            {/*Home*/}
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
