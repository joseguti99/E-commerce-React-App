import React from 'react'
import { useEffect, useState } from 'react';
import DataBase from '../../DataBase.json';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom'
import NavBarNav from '../NavBarNav'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState()

    const getProduct = (data) => new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(data){
                resolve(data);
            } else {
                reject("La ruta no se pudo encontrar");
            }
        }, 1500)
    });
    
    useEffect(()=>{
        getProduct(DataBase)
        .then((res) => setProduct(res.product.find(product => product.id === itemId)))
		.catch((err) => console.log(err)
        );
	}, [itemId]);

    return(
        <>
        <NavBarNav/>
            {product ? <ItemDetail item={product}/> : 'Cargando...'}
        </>
)
}
export default ItemDetailContainer;
