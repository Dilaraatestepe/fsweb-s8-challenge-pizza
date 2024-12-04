import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Order from "./components/Order";
import HomePage from "./components/HomePage";
import Success from "./components/Success";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
          <Footer />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
