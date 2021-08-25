import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";
import Error from "./pages/Error/Error";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" render={(props) => <List {...props} />} />
      <Route
        exact
        path="/pokemon/:pokemonId"
        render={(props) => <Detail {...props} />}
      />
      <Route path="/404" component={Error} />
      <Redirect to="/404" />
    </Switch>
    <Footer />
  </Router>
);

export default App;
