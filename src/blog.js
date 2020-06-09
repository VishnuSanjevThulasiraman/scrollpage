import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Blog(props) {
    return(
        <Container className="blog" fluid>
        <Row className="centerstuff">
            <h1 >
                {props.title}
            </h1>
        </Row>
        <Row className="centerstuff">
            <h2 className="darkyellow">
                {props.subtitle}
            </h2>   
        </Row> 
        <Row>
            <Col className="img-col">
                <Image src="https://dummyimage.com/640x4:3" fluid/>
            </Col>
        </Row>
        <Row>   
            <body>  
                <p>
                    {props.p1}
                </p>
                <p>
                    {props.p2}
                </p>
            </body>
        </Row>
        <Row>
            <Col className="img-col">
                <Image src="https://dummyimage.com/640x4:3" fluid/>
            </Col>
            <Col className="img-col">
                <Image src="https://dummyimage.com/640x4:3" fluid/>
            </Col>
        </Row>
        <Row className="centerstuff quote">
        “Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.”
        </Row>
        <Row>
            <body>
                <p>
                    {props.p3}
                </p>
                <p>
                    {props.p4}
                </p>
                <p>
                    {props.p5}
                </p>
            </body>
        </Row>
        <Row>
            <h4>
                {props.author}
            </h4>
        </Row>
            
        </Container>
    );
}

export default Blog;