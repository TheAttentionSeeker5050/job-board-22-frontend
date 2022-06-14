import React from 'react';
import './index.css';
import { RefreshTokenAPICall } from '../../../API/refresh_token';


// import the react bootstrap elements
import {
    Container,
    Row,
    Col,
    Image,
    Figure,
    Card,
    ListGroup,
    Button,
    Accordion,
    Form,
    InputGroup
} from 'react-bootstrap'


export class EditContactInfoPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            location:"",
            phone_number:"",
            city_of_residence:"",
            state_province: "",
            country:"",
            refresh_var: null
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)


    }


    async componentDidMount(refresh=false) {

        let id = localStorage.getItem("user_id") 
        await fetch(`http://127.0.0.1:8000/users/${id}/`,{
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            }})
            .then(response => response.json())
            .then(data => {
                if (data.first_name === null) {
                    RefreshTokenAPICall()
                    window.location.replace(`http://127.0.0.1:3000/profile/edit-contact-info/`)
                }
                this.setState({
                    first_name: data.first_name, 
                    last_name: data.last_name, 
                    email:data.email,
                    phone_number:data.phone_number,
                    city_of_residence: data.city_of_residence,
                    state_province:data.state_province,
                    country: data.country,
                    // location: `${data.city_of_residence}, ${data.state_province}, ${data.country}`
                })
            })
            .catch(error_var => {
                console.error(error_var)
                RefreshTokenAPICall()
                this.setState({refresh_var:window.location.replace(`http://127.0.0.1:3000/profile/edit-contact-info/`)})
                return window.location.replace(`http://127.0.0.1:3000/profile/edit-contact-info/`)
            })

    }

    handleInputChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        
        this.setState((prev) => {
            return {
            [e.target.name]: value
            }
        })

        console.log(this.state)
    }

    async handleFormSubmit() {
        let id = localStorage.getItem("user_id") 
        let form_data = {
            first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            email:this.state.email,
            phone_number:this.state.phone_number,
            city_of_residence: this.state.city_of_residence,
            state_province:this.state.state_province,
            country: this.state.country,
        }
        await fetch(`http://127.0.0.1:8000/users/${id}/`,{
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(form_data)
            })
            .then(response => response.json())
            .then(data => {
                window.location.replace("http://127.0.0.1:3000/profile/")
            })
            .catch(error => {
                console.error("Error: \n", error)
            })
            
    }

    render() {
        
        return(

            <Container className='profile_container'>
                <Form >
                <br/>
                <h1>Profile</h1>

                <Card >
                        <Card.Header>Contact Information</Card.Header>
                        <Card.Body>
                        <Row>
                        <Col> 
                            
                            <Form.Group className="mb-3" controlId="first_name">
                                <Form.Label id="first_name">First name</Form.Label>
                                <Form.Control
                                value={this.state.first_name}
                                name="first_name"
                                onChange={event => this.handleInputChange(event)}
                                placeholder="Your first Name"
                                />
                            </Form.Group>
                            </Col> 
                            <Col> 

                            <Form.Group className="mb-3" controlId="last_name">
                                <Form.Label id="last_name">Last name</Form.Label>
                                <Form.Control
                                onChange={event => this.handleInputChange(event)}
                                name="last_name"
                                value={this.state.last_name}
                                placeholder="Your last Name"
                                />
                            </Form.Group>
                        </Col> 
                        </Row>
                        <Row>
                        <Col> 

                        <Form.Group className="mb-3" controlId="email">
                                 <Form.Label id="email">Email address</Form.Label>
                                 <Form.Control
                                 value={this.state.email}
                                 name="email"
                                 onChange={event => this.handleInputChange(event)}
                                 placeholder="Your email address"
                                 />
                        </Form.Group>
                            
                        </Col> 
                        <Col> 
                        <Form.Group className="mb-3" controlId="phone_number">
                                <Form.Label id="phone_number">Phone number</Form.Label>
                                <Form.Control
                                value={this.state.phone_number}
                                name="phone_number"
                                onChange={event => this.handleInputChange(event)}
                                placeholder="Your phone number"
                                />
                        </Form.Group>
                            
                        </Col> 
                        </Row>

                        <Row>
                        <Col> 

                        <Form.Group className="mb-3" controlId="city_of_residence">
                                <Form.Label id="city_of_residence">City</Form.Label>
                                <Form.Control
                                value={this.state.city_of_residence}
                                name="city_of_residence"
                                onChange={event => this.handleInputChange(event)}
                                placeholder="Your city of residence"
                                />
                        </Form.Group>    
                            
                        </Col> 
                        <Col> 
                        <Form.Group className="mb-3" controlId="state_province">
                                <Form.Label id="state_province">State/Province</Form.Label>
                                <Form.Control
                                value={this.state.state_province}
                                name="state_province"
                                onChange={event => this.handleInputChange(event)}
                                placeholder="State or province of residence"
                                />
                        </Form.Group>
                            
                        </Col> 
                        </Row>


                        <Row>
                        <Col> 
                        <Form.Group className="mb-3" controlId="country">
                                <Form.Label id="country">Your country</Form.Label>
                                <Form.Control
                                value={this.state.country}
                                name="country"
                                onChange={event => this.handleInputChange(event)}
                                placeholder="Country of residence"
                                />
                        </Form.Group>

                                
                            
                        </Col> 

                        
                        </Row>
                        <Button type='submit' variant='primary' onClick={this.handleFormSubmit} >Save</Button>
                        </Card.Body>
                </Card>
                <br/>
                </Form>    
                
            </Container>
        )
    }
}
