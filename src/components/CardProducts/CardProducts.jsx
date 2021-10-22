import React from 'react';
import {Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';

const CardProducts = () => {
    const productos = [
        {
        title: 'Celular Samsung S21 8/128 Gris',
        price: 45.999,
        stock: 7
        },

        {
        title: 'Celular Samsung S8 4/64 Negro',
        price: 133.999,
        stock: 7
        },

        {
        title: 'Celular Samsung S10 4/ Blanco',
        price: 59.999,
        stock: 7
        }
    ];

    return(
        <>
        <Card className="col-3 mx-3">
            <CardImg top width="50%" src="https://www.cetrogar.com.ar/media/catalog/product/t/e/te2685.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500" alt="Card image cap" />
            <CardBody>
            <CardTitle className="text-center" tag="h5">Celular Samsung S21 8/128 Gris</CardTitle>
            <CardText className="text-center h3">$133.999</CardText>
            <CardText className="text-center">
            <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            </CardBody>
        </Card>
    </>
    )
}

export default CardProducts;