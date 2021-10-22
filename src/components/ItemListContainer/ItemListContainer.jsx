import React from 'react'
import {useEffect, useState} from 'react'
import DataBase from '../../DataBase.json'
import ItemList from '../ItemList'

//logica de productos, traer json y poner el elemento <itemList/>

const ItemListContainer = () => {
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
            product.map(product => {
        return (
            <>
            <ItemList key={product.id} titleCard={product.title} priceCard={product.price} imgCard={product.img} stockCard={product.stock}/>
            </>
            
            
        )
    })
    
)
}

export default ItemListContainer;

