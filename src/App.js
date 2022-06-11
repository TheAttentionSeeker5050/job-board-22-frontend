import { Outlet, Link } from "react-router-dom";
import React from 'react';

import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown,
    Image,
    Figure,
    
} from 'react-bootstrap'

function userLoggedButtons() {
  return (
    
    <Nav className="me-auto">
      <Nav.Link href="/employer/publish-jobpost">Post a Job</Nav.Link>
      <Nav.Link href="/logout">Log out</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
  )
}

function userNotLoggedButtons() {
  return (

    <Nav className="me-auto">
      <Nav.Link href="/employer/publish-jobpost">Post a Job</Nav.Link>
      <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
    </Nav>

  )
}

export function App() {

  var user_account_buttons = userNotLoggedButtons()
  var token = localStorage.getItem("access_token")

  if (token) {
    user_account_buttons = userLoggedButtons()
  } else {
    user_account_buttons = userNotLoggedButtons()
  }
  


  // This is the header element that later on I will rename and add it to the components folder
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/candidate/browse-jobs">Search Jobs</Nav.Link>
            <Nav.Link href="/employer/browse-companies">Search Companies</Nav.Link>
        </Nav>


        {/* <Nav className="me-auto">
 
            <Nav.Link href="/employer/publish-jobpost">Post a Job</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            
            <Nav.Link href="/logout">Log out</Nav.Link>
            <Nav.Link href="/logout">profile</Nav.Link>

        </Nav> */}

        {user_account_buttons}

        <Outlet />



    </Container>
    </Navbar>
  );
}