import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom'
import NavBarNav from '../NavBarNav'
import Spinner from '../Spinner'
import { getFirestore } from "../../firebase";
import { doc, getDoc, collection, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState([])

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
        const db = getFirestore();

        const q = query( collection(db, "items"), where("id", "==" , itemId));

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
