import '../fonts/css/atkinson.css'
import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import BlogEntry from "./BlogEntry"

function App() {
      return (
        <div className="App">
          <div>
            <nav>

                <a href="https://shamansgarage.com/#/blog-info">
                <div className ="nav-btn close">
                <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                </a>

                <Link to="/">
                <div className ="nav-btn">
                <i class="fa fa-i-cursor" aria-hidden="true"></i>
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
