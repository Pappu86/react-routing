import React, {Component} from 'react';
import './assets/css/bootstrap.min.css';

class Contact extends Component {
    constructor({match}) {
        super();
        this.state={
            postData:{},
            postResult:"",
            myName:match.params.userName
        }

        console.log("test: ",match.params.userName);
    }

    handleChange=(e)=>{
        let target=e.target,
            fieldName=target.name,
            fieldValue=target.value;

        this.setState(Object.assign(this.state.postData,{[fieldName]:fieldValue}));
    }

    onSubmitHandler=(e)=>{
        console.log("postData", this.state.postData);
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-12">
            <h2>My name is {this.state.myName}</h2>
            <form onSubmit={this.onSubmitHandler}>
            <p id="FormDetails">Show Form submitted date</p>
        <label>
        First Name:
            <br></br>
        <input name="firstName" onChange={this.handleChange} type="text" placeholder="Enter your first name" />
            </label>
            <br></br>
            <label>
            Last Name:
            <br></br>
        <input name="lastName" onChange={this.handleChange} type="text" placeholder="Enter your last name" />
            </label>
            <br></br>
            <label>
            Email:
    <br></br>
        <input name="email" onChange={this.handleChange} type="email" placeholder="Enter your email" />
            </label>
            <br></br>
            <label>
            Phone:
    <br></br>
        <input name="phone" onChange={this.handleChange} type="number" placeholder="Enter your phone number" />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
            </form>
            </div>
    );
    }
}

export default Contact;