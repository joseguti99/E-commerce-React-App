import React from 'react';
import { getFirestore } from "../../firebase";
import { useState } from 'react';
import { useContext } from 'react';
import {CartContext} from '../CartContext/CartContext';
import { collection, addDoc} from "firebase/firestore";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

const Payment = () => {
    const { cart, setCart} = useContext(CartContext)

    const inputs = [
        {
            label: "Name",
            name: "name"
        },
        {
            label: "LastName",
            name: "surname"
        },
        {
            label: "Age",
            name: "age"
        },
        {
            label: "Email",
            name: "email"
        },
        {
            label:"address and number",
            name: "address"
        },
        {
            label: "Phone Number",
            name: "phoneNumber"
        },
    ];
    
    const [formFields, setFormFields] = useState({
        name: "",
        surname: "",
        age: "",
        email: "",
        address: "",
        phoneNumber: ""
    });

    function handleChange(evt) {
        setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
    }

    const sendOrder = () => {
    const order = {
        buyer: [{   name: formFields.name, 
                    surname: formFields.surname, 
                    age: formFields.age, 
                    email: formFields.email,
                    address: formFields.address,
                    phoneNumber: formFields.phoneNumber}],
        items: [{cart}]
    }
    
    setCart([])

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Thank you ' + formFields.name + ' for your purchase',
        showConfirmButton: false,
        timer: 2500,
    })

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    }
    return (
        <>
        <div className="mx-5 col-4 text-center">
            <h2>BUYER DATA</h2>
            <div>
                <img className="col-1" src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/svg/factura.png?raw=true" alt="" />
            </div>
        {inputs.map((input) => (
        <div key={input.name} className="text-center my-3 col-9 mx-5">
            <label className="m-1 h5" >{input.label}</label>
            <input
                value={formFields[input.name]}
                name={input.name}
                type="text"
                onChange={handleChange}
                className="form-control"
            />
        </div>
        ))}
        <Link to="/" className="text-decoration-none text-dark col-10">
    <button className="btn btn-danger text-center col-3 p-2" disabled={!formFields.name && 
                        formFields.surname && 
                        formFields.age && 
                        formFields.email && 
                        formFields.address &&
                        formFields.phoneNumber
                        } onClick={sendOrder}>
        Finish Buying
        </button>
        </Link>
    </div>
    </>
    )
}

export default Payment
