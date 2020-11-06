import React, {Component} from 'react';

class About extends Component {
    constructor() {
        super();
        this.state={
            login:false
        }
    }
    render() {
        return (
           <div>This is about page</div>
    );
    }
}

export default About;