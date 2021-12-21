import React from 'react';
import { getFirestore } from "../../firebase";
import { useState } from 'react';
import { useContext } from 'react';
import {CartContext} from '../CartContext/CartContext';
import { collection, addDoc} from "firebase/firestore";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { Card, CardGroup, CardBody} from 'reactstrap';
import { FcDataProtection } from "react-icons/fc";

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
            label:"Address and number",
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
        <div className="row m-3 bg-white shadow">
            <h2 className="display-4 col-12 text-center">BUYER DATA</h2>
            {inputs.map((input) => (
        <div key={input.name} className="my-3 col-5 mx-5">
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
        
        <Link to="/" className="text-decoration-none text-dark text-center">
    <button className="btn btn-danger rounded-pill text-center col-3 p-3 m-5" disabled={!formFields.name && 
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
    <CardGroup>
        <Card className="mx-4 shadow m-1 bg-warning">
            <Link to="/err" className="text-decoration-none text-center">
                <CardBody>
                    <FcDataProtection className="display-1"/>
                    <h3 className="text-dark">Maximum data security</h3>
                </CardBody>
            </Link>
        </Card>
    </CardGroup>
    </>
    )
}

export default Payment
