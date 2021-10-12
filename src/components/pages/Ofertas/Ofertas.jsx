import react,{Component} from "react";
import styles from "./Ofertas.module.css"
import { Container, Row, Col } from "reactstrap";

const Ofertas =  () => {
    return ( 
        <>
        <Container className="border text-center">
                <Row>
                    <Col xs="4">Oferts 1</Col>
                    <Col xs="4">Oferts 2</Col>
                    <Col xs="4">Oferts 3</Col>
                </Row>
        </Container>
        </>
    );
}

export default Ofertas;