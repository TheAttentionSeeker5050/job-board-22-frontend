import React from 'react';
// import './index.css';
// import { RefreshTokenAPICall } from '../../API/refresh_token';


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

export class WorkExperienceList extends React.Component {
    // this will render the work experience for the candidate
    constructor(props) {
        super(props);
        this.state = {
            work_experience_obj:[]
        }
        this.getWorkExperienceByUser = this.getWorkExperienceByUser.bind(this)
        this.renderJobElement = this.renderJobElement.bind(this)
        this.renderAllElements = this.renderAllElements.bind(this)

    }

    getWorkExperienceByUser(user_id=null, is_profile_owner=true){
        // get the work experience of a specific candidate
        if (is_profile_owner === true) {
            var id = localStorage.getItem("user_id")
        } else {
            var id = user_id
        }
    
        fetch(`http://127.0.0.1:8000/job-experience-list/${id}/`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                "Accept": "application/json",
    
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({work_experience_obj: data})
                console.log(data)
                console.log(typeof(data))
            })
    
        
    }

    renderJobElement(job_element) {
        return (
            <Card >
                    <Card.Header><span>Company: {job_element.company} </span></Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item> <span>Position: {job_element.job_title} </span></ListGroup.Item>
                            <ListGroup.Item><span>Start Date: {job_element.start_date} </span></ListGroup.Item>
                            <ListGroup.Item><span>End Date: {job_element.end_date} </span></ListGroup.Item>
                            <ListGroup.Item> <span>Description: {job_element.description} </span></ListGroup.Item>
                        </ListGroup>
                        <div className='button-div'>

                            <Button variant='primary'>Edit</Button>
                            <Button variant='primary'>Delete</Button>
                        </div>


                    </Card.Body>
                </Card>
        )
    }

    componentDidMount(){
        // after component mount, execute this command

        this.getWorkExperienceByUser()


    }

    renderAllElements() {
        if (this.state.work_experience_obj) {
            // this.all_elements = this.state.work_experience_obj
            return (
                
                <div>The elements are rendered </div>
            )
        } else {
            return <div>The elements are not rendered</div>
        }
    }

    render () {
        const {data} = this.state.work_experience_obj
        if (this.state.work_experience_obj) {
            // this.all_elements = this.state.work_experience_obj
            return (
                
                <React.Fragment>
                    {Array.isArray(data) && data.map(element => (
                        <renderJobElement job_element={element}/>
                    ))}
                </React.Fragment>
            )
        } else {
            return <div>The elements are not rendered</div>
        }
        
    }

}