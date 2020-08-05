import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = "/" component = {Home}></Route>
    </div>
    </Router>
  );
}

export default App;
