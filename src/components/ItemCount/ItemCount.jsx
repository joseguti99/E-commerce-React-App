import React from 'react'
import {useState} from "react";
import { Link } from 'react-router-dom'

const ItemCount = (item) => {
    const [count, setCount] = useState(0);
    const stockItem = item.item.stock

    const increment = (e) => {
        e.preventDefault();
        if (count < stockItem) setCount(count + 1);
    };

    const decrement = (e) => {
        e.preventDefault();
        if (count > 0) setCount(count - 1);
    };

    const handleClick = (e) =>{
        e.preventDefault();
        if (count !== 0) {
            item.onAdd(count);
        }
    }

    return (
        <>
        <div className="row text-center">
            <div className="col-4 mt-1">
                <button className="btn btn-light col-12" onClick={increment}>
                ➕
                </button>
            </div>
            <div className="col-3 bg-light rounded bagde mx-1">
                <h4 className="mt-2">{count}</h4>
            </div>
            <div className="col-4 mt-1">
                <button className="btn btn-light col-12" onClick={decrement}>
                ➖
                </button>
            </div>
                <h5>Units available:{item.item.stock}</h5>
            <div>
                <button className="btn btn-outline-dark flex-shrink-0 mb-2" onClick={(e) => {handleClick(e)}} type="button" >Add To Cart</button>
            </div>
            <div>
                {/* <button className="btn btn-outline-dark flex-shrink-0">
                    <Link exact to="/Cart">
                            <i className="bi-cart-fill me-1">
                                </i>view Cart
                    
                </button> */}
            </div>
        </div>
        </>
    );
}

export default ItemCount
