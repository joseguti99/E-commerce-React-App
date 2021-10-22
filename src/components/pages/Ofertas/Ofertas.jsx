import React from 'react';
import react, {Component} from "react";
import styles from "./Ofertas.module.css";
import {Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import NavBarNav from '../../NavBarNav';
import CardProducts from '../../CardProducts'

const Ofertas = (props) => {
    return (
        <>
        <NavBarNav/>
        <CardProducts/>
        </>
    );
};

export default Ofertas;