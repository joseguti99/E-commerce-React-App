import React from 'react'
import { getFirestore } from "../../firebase";
import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'
import { collection, addDoc} from "firebase/firestore";

const Payment = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)

    const sendOrder = () => {
    const order = {
        buyer: [{    name: "pepe", 
                    lastName: "mujica", 
                    phone:"3516458775", 
                    email: "pepemujica@gmail.com",
                    location: "avenida siempre mujica",
                    locationNumber: "421"}],
        items: [{cart}]
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    }

    return (
        <>
            <button className="btn btn-outline-dark flex-shrink-0 mb-2" onClick={sendOrder}>Finish buying</button>
        </>
    )
}

export default Payment
