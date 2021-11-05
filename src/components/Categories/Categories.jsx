import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import DataBase from '../../DBProducts.json'
import NavBarNav from '../NavBarNav'
import ItemList from '../ItemList'

const Categories = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    const getProduct = (data) => new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(data){
                resolve(data);
            } else {
                reject("La ruta no se pudo encontrar");
            }
        }, 1500)
    });


    useEffect(() => {
        getProduct(DataBase)
        .then((res) => setProducts(res.filter((items) => items.category === categoryId)))
        .then((data) => setProducts(data));
    }, [categoryId]);

    console.log(products)
    return (
        <>
        <NavBarNav/>
        <ItemList products={products} />
        </>
    )
}

export default Categories;
