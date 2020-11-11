import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/About">About</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/DestructuringAssignment">Destructuring Assignment</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Header;

