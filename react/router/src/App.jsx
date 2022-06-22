import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

// 0. create project
// 1. male static layout (верстка)
// 2. divide into components
// 3. static react version (верстка)
// 4. declare state (what, where) and props
//5. write logic

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
