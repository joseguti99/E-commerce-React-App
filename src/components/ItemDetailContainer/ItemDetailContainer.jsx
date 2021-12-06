import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom'
import NavBarNav from '../NavBarNav'
import Spinner from '../Spinner'
import { getFirestore } from "../../firebase";
import { doc, getDoc, } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        const db = getFirestore();

        const theItem = doc(db, 'items', itemId);
        getDoc(theItem).then((snapshot) => {
        if (snapshot.exists()) {
            setProduct(snapshot.data());
        }
        });
	}, [itemId]);

    return(
        <>
        <NavBarNav/>
            {product ? <ItemDetail item={product}/> : <Spinner/>}
        </>
)
}
export default ItemDetailContainer;
