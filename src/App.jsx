import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Order from "./components/Order";
import HomePage from "./components/HomePage";
import Success from "./components/Success";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/order">
          <Header />
          <Order />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
