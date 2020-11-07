import React, {Component} from 'react';
import axios from 'axios';

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
            < div >This is about page< /div>
        );
    }
}

export default About;