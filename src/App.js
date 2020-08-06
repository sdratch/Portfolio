import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="*" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
