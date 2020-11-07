import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";

class Router extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/About" component={About} />
                <Route  path="/Contact" component={Contact} />
                <Route  component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Router;

