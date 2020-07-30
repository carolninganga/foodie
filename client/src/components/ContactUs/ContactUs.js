import React, { Component } from 'react';
import Axios from 'axios';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.onNameChange.bind(this);
        this.onEmailChange.bind(this);
        this.onMessageChange.bind(this);
        this.handleSubmit.bind(this);
    };
    onNameChange(event) {
        this.setState({name: event.target.value})
        }
        onEmailChange(event) {
        this.setState({email: event.target.value})
        }
        onMessageChange(event) {
        this.setState({message: event.target.value})
        }
    handleSubmit(event) {
        event.preventDefault();
        Axios.post('/api/contact-us/send', this.state).then(function(res){
            alert("Your message has been sent to the Foodie Team!")
        }).catch(function(err){
            console.log(err);
        });

        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
        render() {
            
        return (
<div className="container">
<div className="row mt-3 text-center">
<h1 className="mt-3" style={{margin: "0 auto", color: "white"}}>Contact Us</h1>
</div>
<div className="row justify-content-between mt-5 mb-5">     
        <div className="ContactUs col-md-12">
       
            <form id="contact-us-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name" style={{color: "white"}}>Name</label>
                <input style={{color:"white"}} type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{color: "white"}}>Email address</label>
                <input style={{color:"white"}} type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message" style={{color: "white"}}>Message</label>
                <textarea style={{color: "white"}} className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
    </div>
    </div>

 )}}


export default ContactUs;