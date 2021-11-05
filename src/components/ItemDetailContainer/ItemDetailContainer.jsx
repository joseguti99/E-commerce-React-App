import React from 'react'
import { useEffect, useState } from 'react';
import DataBase from '../../DataBase.json';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState("");
    const {itemId} = useParams("")

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
        .then((res) => {setProduct(res.find((producto) => producto.id === itemId));})
        .catch((err)=> console.log(err));
    },[itemId]);
    
    console.log(itemId);
    return(
        <>
            <ItemDetail item={product}/>
        </>
)
}

export default ItemDetailContainer;
