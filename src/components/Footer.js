import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer(){
    return(
        <Container className="footer" fluid>
        <Row className="centerstuff">
            <h1 >Contact Us</h1>
        </Row>
        <Row className="centerstuff">
            <a href="http://www.facebook.com">Facebook</a> -
            <a href="http://www.twitter.com">Twitter</a>
        </Row>
        </Container>
    );
}

export default Footer;