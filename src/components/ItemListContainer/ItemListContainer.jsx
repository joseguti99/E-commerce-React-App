import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'
import { getFirestore } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const{ categoryId } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const q = query( collection(db, "items"), where("category", "==" , categoryId));
        getDocs(q).then((snapshot) => {
            setProducts(
            snapshot.docs.map((doc) => {
                const newDoc = { ...doc.data(), id: doc.id };
                return newDoc;
            })
            );
        });
	}, [categoryId]);
    
    return(
            <>
            <ItemList key={products.id} items={products}/>
            </>
        )
}

export default ItemListContainer;