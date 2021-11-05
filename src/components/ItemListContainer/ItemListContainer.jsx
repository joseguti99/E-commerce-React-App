import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import DataBase from '../../DBProducts.json'
import ItemList from '../ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const{ categoryId } = useParams;

    const getProduct = (data) => new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(data){
                resolve(data);
            } else {
                reject("La ruta no se pudo encontrar");
            }
        }, 2000)
    });

    useEffect(()=>{
        getProduct(DataBase)
        .then((res) => {
            categoryId
            ? setProducts(res.filter((product) => product.category === categoryId))
            : setProducts(DataBase);
        })
        .catch((err) => console.log(err));
    }, [categoryId]);

    return(
            <>
            <ItemList items={products}/>
            </>
        )
}

export default ItemListContainer;