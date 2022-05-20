import React from 'react';
import './index.css';

import {RegisterAPICall} from '../../API/register'

// import the react bootstrap elements
import {
    Container,
    Form,
    Button, 
    Alert
} from 'react-bootstrap'

export class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            first_name:"",
            last_name:"",
            password:"",
            password2:"",
            email:"",
            alert_message:""

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

    }


    handleInputChange(event) {
        this.setState({
            [event.target.name]:event.target.value
    })
    }



    handleSubmit(event) {
        // error = ""
        // for sumbitting the form login data
        // we will add more data validaton later on
        if (this.state.username === "" || this.state.password === "" ||this.state.password2 === "" || this.state.email === "") {
            this.setState({alert_message:"form data incomplete"})
            // alert("a username and password was submitted" + this.state.username + " " + this.state.password)
            
        } else if (this.state.password != this.state.password2) {
            this.setState({alert_message:"The passwords don't match"})
            // console.log(this.state.error)
        } else if (this.state.email.indexOf("@") === -1){
            this.setState({alert_message:"The email should contain @"})
            // console.log(this.state.error)
        } else {
            // this.setState({alert_message:"data is complete and good"})
            RegisterAPICall(
                this.state.username, 
                this.state.email, 
                this.state.password, 
                this.state.password2, 
                this.state.first_name, 
                this.state.last_name
            )
            // console.log(this.state.error)
        }
        // console.log(this.state.error)
        event.preventDefault()

    }


    render () {
        return (
            <Container className='login_register_container'>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>

                    {this.state.alert_message.length > 0  &&
                        <Alert key="danger" variant="danger">
                            {this.state.alert_message}
                        </Alert>
                    }

                    <Form.Group className='mb-3' controlId='formBasicUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username" type='username' placeholder='Enter email'
                            value={this.state.username} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name="first_name" type='text' placeholder='Enter first name'
                            value={this.state.first_name} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            name="last_name" type='text' placeholder='Enter last name'
                            value={this.state.last_name} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            name="email" type='email' placeholder='Enter email'
                            value={this.state.email} onChange={this.handleInputChange}/>
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        name='password' type='password' placeholder='Enter password'
                        value={this.state.password} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Retype your password</Form.Label>
                        <Form.Control 
                        name='password2' type='password' placeholder='Enter password again'
                        value={this.state.password2} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Button type='submit'>Log In</Button>


                </Form>
            </Container>
        )
    }
}