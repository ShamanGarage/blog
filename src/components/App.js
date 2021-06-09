import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import BlogEntry from "./blog/BlogEntry"
function App() {
      return (
        <div className="App">
          <div>
            <nav>

                <Link to="/">
                <div className ="nav-btn">
                <p>Home</p>
                </div>
                </Link>

                <Link to="/about">
                <div className ="nav-btn">
                <p>About</p>
                </div>
                </Link>
            </nav>
          </div>
          <div className="content">
            <Switch>
            <Route exact path="/">
              <h1>Home</h1><br/>
              <Link to="/2021/T1">¿Esto funciona?</Link>
            </Route>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route exact path="/:date/:post/">
              <BlogEntry/>
            </Route>
            <Route>
            404
            </Route>
          </Switch>
          </div>
          </div>
            );
}

export default App;
