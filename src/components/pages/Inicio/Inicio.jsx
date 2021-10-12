import react,{Component} from "react";
import styles from "./Inicio.module.css"
import NavBarNav from '../../NavBarNav';
import { Container, Row, Col } from "reactstrap";

const Inicio =  () => {
    return ( 
        <>
        <Container className="border text-center">
                <Row>
                    <Col xs="4">Home 1</Col>
                    <Col xs="4">Home 2</Col>
                    <Col xs="4">Home 3</Col>
                </Row>
        </Container>
        </>
    );
}

export default Inicio;