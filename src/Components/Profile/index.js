import React from 'react';
import './index.css';
import { RefreshTokenAPICall } from '../../API/refresh_token';
import {WorkExperienceList} from './WorkExperience'

// import the react bootstrap elements
import {
    Container,
    Row,
    Col,
    Card,
    Nav,
    ListGroup,
    Button,
    Accordion
} from 'react-bootstrap'



export class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_data_response:null,
            first_name:"",
            last_name:"",
            email:"",
            location:"",
            phone_number:"",
            
        }

        this.getBasicInfo = this.getBasicInfo.bind(this)

    }

    async getBasicInfo(){
        // get the basic contact info to display in the main profile page
        var id = localStorage.getItem("user_id")
        await RefreshTokenAPICall()
        await fetch(`http://127.0.0.1:8000/users/${id}/`, {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
            // body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    first_name:data.first_name, 
                    last_name:data.last_name, 
                    email:data.email,
                    phone_number:data.phone_number,
                    location: `${data.city_of_residence}, ${data.state_province}, ${data.country}`
                })


            })
            .catch(error => {

                console.error("Error: \n", error)

            })
    }



    componentDidMount(){
        // after component mount, execute this command
        this.getBasicInfo()
        
    }




    render () {
        return (
            <Container className='profile_container'>
                <br/>
                <h1>Profile</h1>
                {/* <p>{this.state.user_data_response.email}</p> */}
                <Row>
                    <Col> 
                    <Card >
                        <Card.Header>Contact Information</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item> <span> First name: {this.state.first_name} </span></ListGroup.Item>
                                <ListGroup.Item><span> Last name: {this.state.last_name} </span></ListGroup.Item>
                                <ListGroup.Item><span> Email: {this.state.email} </span></ListGroup.Item>
                                <ListGroup.Item><span> Location: {this.state.location} </span></ListGroup.Item>
                                <ListGroup.Item><span> Phone number: {this.state.phone_number} </span></ListGroup.Item>
                            </ListGroup>
                            <Button variant='primary' href="profile/edit-contact-info/">Edit</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Accordion>

                        <Accordion.Item eventKey='0'>
                            <Accordion.Header><h2>Work Experience </h2></Accordion.Header>
                            <Accordion.Body>
                                {/* this is for all the work experience elements */}
                                <WorkExperienceList user_id={1}/> 
                                {/* end */}
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </Row>

                <br/>
                <Row>
                    <Accordion>

                        <Accordion.Item eventKey='0'>
                            <Accordion.Header><h2>Certifications </h2></Accordion.Header>
                            <Accordion.Body>
                            <Card >
                            <Card.Header>Certification Name: </Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <span>Institution: </span></ListGroup.Item>
                                    <ListGroup.Item><span>Start Date: </span></ListGroup.Item>
                                    <ListGroup.Item><span>End Date: </span></ListGroup.Item>
                                    <ListGroup.Item> <span>Description: </span></ListGroup.Item>
                                </ListGroup>
                                <Button variant='primary'>Edit</Button>

                            </Card.Body>
                        </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </Row>

                <br/>
                <Row>
                    <Accordion>

                        <Accordion.Item eventKey='0'>
                            <Accordion.Header><h2>Job Poster info</h2></Accordion.Header>
                            <Accordion.Body>
                            <Card >
                            {/* <Card.Header>Certification Name: </Card.Header> */}
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <span>Name of your company: </span></ListGroup.Item>
                                    <ListGroup.Item><span>Email: </span></ListGroup.Item>
                                    <ListGroup.Item><span>Summary: </span></ListGroup.Item>
                                    <ListGroup.Item> <span>Address: </span></ListGroup.Item>
                                </ListGroup>
                                <Button variant='primary'>Edit</Button>

                            </Card.Body>
                        </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </Row>
            </Container>
        )
    }
}