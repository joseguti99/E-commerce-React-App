import React from 'react'
import { useEffect, useState } from 'react';
import DataBase from '../../DataBase.json';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const getProduct = (data) => new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(data){
                resolve(data);
            } else {
                reject("La ruta no se pudo encontrar");
            }
        }, 3000)
    });

    useEffect(()=>{
        getProduct(DataBase)
        .then((res) => setProduct(res))
        .catch((err)=> console.log(err));
    },[]);

    return(
        !product ? 'cargando...' : 
            product
            .filter(product => product.id == 0)
            .map(product => {
        return (
            <>
            <ItemDetail key={product.id} titleDetail={product.title} descriptionDetail={product.description} priceDetail={product.price} imgDetail={product.img} stockDetail={product.stock}/>
            </>
            
            
        )
    })
    
)
}

export default ItemDetailContainer;
