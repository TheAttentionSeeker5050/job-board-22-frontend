import React from 'react';
import './index.css';



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
    Accordion
} from 'react-bootstrap'


export class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_data_response:null,
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleInputChange = this.handleInputChange.bind(this)
        this.getBasicInfo = this.getBasicInfo.bind(this)

    }

    getBasicInfo(){
        // let user = {
        //     email: email,
        //     password: password
        // }
    
        var id = 2
        var token = 
    
        fetch(`http://127.0.0.1:8000/users/2`, {
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
                this.setState({user_data_response:data})
                // console.log(this.state.user_data_response)


            })
            .catch(error => {
                console.error("Error: \n", error)
            })
    }
    


    render () {
        return (
            <Container className='profile_container'>
                <br/>
                <h1>Profile</h1>
                <Row>
                    <Col> 
                    <Card >
                        <Card.Header>Contact Information</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item> <span>First name: </span></ListGroup.Item>
                                <ListGroup.Item><span>Last name: </span></ListGroup.Item>
                                <ListGroup.Item><span>Email: </span></ListGroup.Item>
                                <ListGroup.Item><span>Location: </span></ListGroup.Item>
                                <ListGroup.Item><span>Phone number: </span></ListGroup.Item>
                            </ListGroup>
                            <Button variant='primary' onClick={this.getBasicInfo}>Edit</Button>
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
                                <Card >
                                    <Card.Header>Company: </Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span>Position: </span></ListGroup.Item>
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