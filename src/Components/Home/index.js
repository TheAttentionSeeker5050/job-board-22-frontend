import React from 'react';
import './index.css';



// import the react bootstrap elements
import {
    Container,
    Row,
    Col,
    Image,
    Figure
} from 'react-bootstrap'

function HomePage() {

        return( 
            
            
        <main className="d-flex align-items-center ">
            <Container className="main_container">
                <br/>

                <Image 
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwellplan.com.my%2Fwp-content%2Fuploads%2F2016%2F09%2FConstruction-Workers.jpg&f=1&nofb=1'
                    className="img-fluid rounded mx-auto d-block"
                    id='home_image_worker'
                    />
                <br/>
                <h1 >Jobs, Jobs, Jobs!!! We have plenty of them</h1>
                <br/>
                <p>Find jobs near you, and I mean cool jobs, like fireman, cop, welder, trucker, electrician, not those boring office jobs these millenials all seem to have</p>
            </Container>
        </main>



    );

}

export {HomePage};

