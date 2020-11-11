import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import DestructuringComponent from "./DestructuringAssignment";
import NotFound from "./NotFound";

class Router extends Component {
    constructor({match}) {
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/About" component={About} />
                <Route path="/DestructuringAssignment" component={DestructuringComponent} />
                <Route  path="/Contact/:userName" component={Contact} />
                <Route  component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Router;

