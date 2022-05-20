import React from 'react';
import './index.css';

import { APICall2 } from '../../API/get_token';


// import the react bootstrap elements
import {
    Container,
    Row,
    Col,
    Image,
    Figure, 
    Form,
    Button, 
    Alert,
} from 'react-bootstrap'

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            alert_message:""
        }

        // for handling the form data
        this.handlePassword = this.handlePassword.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        // this.handleChange = this.handleChange.bind()

    }

    handleEmail(event) {
        // for handling and storing input data

        this.setState({
            email: event.target.value
        })

    }

    handlePassword(event) {
        // for handling and storing input data
        this.setState({
            password: event.target.value
        })
    }



    handleSubmit(event) {
        // for sumbitting the form login data
        // we will add more data validaton later on
        if (this.state.email != "" && this.state.password != "") {
            // alert("a username and password was submitted" + this.state.username + " " + this.state.password)
            APICall2(this.state.email, this.state.password)
        } else {
            console.log("api call failed")
        }
        event.preventDefault()

    }



    APICall (){
        // we use this funciton to make an api call to the backend for 
        // requesting the authentication token 

        let user = {
            email: this.state.email,
            password: this.state.password
        }



        fetch("http://127.0.0.1:8000/token/obtain/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.access && data.refresh) {
                    localStorage.setItem("access_token", data.access)
                    localStorage.setItem("refresh_token", data.refresh)
                    window.location.replace("/")

                } else {
                    this.setState({alert_message:data.detail})
                }
            })
            .catch(error => {
                console.error("Error: \n", error)
            })
    }


    render () {
        return (
            <Container className='login_register_container'>

                <Form onSubmit={this.handleSubmit}>
                    <h1>Log in</h1>
                    {this.state.alert_message.length >0  &&
                        <Alert key="danger" variant="danger">
                            {this.state.alert_message}
                        </Alert>
                    }
                        
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email" type='email' placeholder='Enter email'
                            value={this.state.email} onChange={this.handleEmail}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        name='password' type='password' placeholder='Enter password'
                        value={this.state.password} onChange={this.handlePassword}/>
                    </Form.Group>

                    <Button onSubmit={this.handleSubmit} type='submit'>Log In</Button>


                </Form>
            </Container>
        )
    }
}