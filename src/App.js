import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = "/" component = {Home}></Route>
      <Route path = "/contact" component = {Contact}></Route>
    </div>
    </Router>
  );
}

export default App;
