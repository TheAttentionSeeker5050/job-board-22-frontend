import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import the react routing
import {   
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";

// import the react bootstrap elements
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


// import other react components

import {HomePage} from "./Components/Home" 
import {LoginPage} from "./Components/Login"
import {App} from "./App"
import { RegisterPage } from './Components/Register';
import {ProfilePage} from "./Components/Profile"
import {LogoutRedirectView} from "./Components/logout/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
    



        <App/>

        { /* routes */ } 

            <BrowserRouter > 
            <Routes>
                <Route path="login" element={<LoginPage/>}></Route>
                <Route path="register" element={<RegisterPage/>}></Route>
                <Route path="profile" element={<ProfilePage/>}></Route>
                <Route path="logout" element={<LogoutRedirectView/>}></Route>



                <Route path="/" element={<HomePage/>}>
                    <Route path="candidate">
                        <Route path="profile"></Route>
                        <Route path="browse-jobs"></Route>
                        <Route path="retrieve-jobpost"></Route>
                    </Route>
                    <Route path="employer">
                        <Route path="profile"></Route>
                        <Route path="browse-companies"></Route>
                        <Route path="retrieve-job"></Route>
                        <Route path="publish-jobpost"></Route>
                    </Route>
                </Route>
                <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <h1>Error</h1>
                        <p>Page not found!!</p>
                    </main>
                }
                />
            </Routes>
            </BrowserRouter> 
            


        { /* end routes */ } 
        
    </React.StrictMode>
);
