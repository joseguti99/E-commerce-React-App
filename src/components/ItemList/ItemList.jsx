import React from 'react'
import { NavLink } from "react-router-dom";

const ItemList = (props) => {
    return (
        <>
            <div className="col-3 mb-5">
                <div className="card h-100">
                    <NavLink exact to="/Products/ItemDetailContainer">
                    <div>
                        <img className="card-img-top" src={props.imgCard} alt="..." />
                    </div>
                    </NavLink>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder text-decoration-none">{props.titleCard}</h5>
                            <h4>$ {props.priceCard}</h4>
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add To Cart</a></div>
                            <div>
                                <p className="mt-2 text-center">Units available: {props.stockCard}</p>
                            </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemList