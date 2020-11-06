import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About';
import Contact from './Components/Contact';
import { Route, Link, BrowserRouter as Router } from "../node_modules/react-router-dom";

const MyRouter=(
    <Router>
      <div>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/About">About</Link> </li>
          <li> <Link to="/Contact">Contact</Link> </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>
);

ReactDOM.render(MyRouter, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
