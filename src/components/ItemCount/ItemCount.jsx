import React from 'react'
import react, { useState, useEfect } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(10);

    const add = () => {
        if (count < stock) setCount(count + 1);
    };

    const remove = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <>
        <div className="row text-center">
            <div className="col-4 mt-1">
                <button className="btn btn-light col-12" onClick={add}>
                ➕
                </button>
            </div>
            <div className="col-3 bg-light rounded bagde mx-1">
                <h4 className="mt-2">{count}</h4>
            </div>
            <div className="col-4 mt-1">
                <button className="btn btn-light col-12" onClick={remove}>
                ➖
                </button>
            </div>
                
            
        </div>
        </>
    );
}

export default ItemCount
