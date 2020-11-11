import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class About extends Component {
    constructor() {
        super();
        this.state = {
            login: false
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            console.log("response", response);
        }).catch(error=>{
            console.log("error", error);
        });
    }

    render() {
        return (
            < div >
            <p>This is about page</p>
            <button className="btn btn-primary"><Link to="/Contact/Md.PappuMiahn">Pass parametre by URL</Link></button>
        </div>
        );
    }
}

export default About;