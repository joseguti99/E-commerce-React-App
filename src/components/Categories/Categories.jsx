import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBarNav from '../NavBarNav'
import ItemListContainer from '../ItemListContainer'

const Categories = () => {
    const {categoryId} = useParams()

    const [category, setcategory] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/product?category=${categoryId}`)
        .then((response) => response.json())
        .then((data) => setcategory(data));
    }, [categoryId]);

    if (!category) return null;

    return (
        <>
        <NavBarNav/>
        <h1>Categoria:{categoryId}</h1>
        <ItemListContainer/>
        </>
    )
}

export default Categories;
