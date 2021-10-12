import react,{Component} from "react";
import styles from "./Contact.module.css"
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
    return ( 
        <>
            <Container className="border text-center">
                <Row>
                    <Col xs="4">Contact 1</Col>
                    <Col xs="4">Contact 2</Col>
                    <Col xs="4">Contact 3</Col>
                </Row>
            </Container>
        </>
    );
} 

export default Contact;