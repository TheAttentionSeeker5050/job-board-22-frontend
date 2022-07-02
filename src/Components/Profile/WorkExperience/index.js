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
        this.RenderJobElement = this.RenderJobElement.bind(this)
        this.getWorkExperienceResponse = []

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
                this.getWorkExperienceResponse = data
                this.setState({work_experience_obj: data})

            })
    
        
    }

    RenderJobElement(job_element) {
        let element = job_element.job_element

        return (
            <Card >
                    <Card.Header><span>Company: </span></Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item> <span>Position: {element.job_title} </span></ListGroup.Item>
                            <ListGroup.Item><span>Start Date: {element.start_date} </span></ListGroup.Item>
                            <ListGroup.Item><span>End Date: {element.end_date} </span></ListGroup.Item>
                            <ListGroup.Item> <span>Description: {element.description} </span></ListGroup.Item>
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
        // console.log(this.state.work_experience_obj)
        // console.log(typeof(this.state.work_experience_obj))

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.work_experience_obj !== prevState.work_experience_obj) {
            // console.log("component updated")
            // console.log("array:",this.getWorkExperienceResponse )
            // console.log(typeof(this.getWorkExperienceResponse))

            this.render()
        }
    }



    render () {
  
        return (
                
            <React.Fragment>
                {Array.isArray(this.state.work_experience_obj) && this.state.work_experience_obj.map(element => (
                    <this.RenderJobElement key={Math.floor(Math.random()*10000000000).toString()} job_element={element}/>
                )) || <p>Cannot display elements</p>}
            </React.Fragment>
        )
        
        
    }

}