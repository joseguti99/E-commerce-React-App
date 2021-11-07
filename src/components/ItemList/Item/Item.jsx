import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <>
        <div className="col-3 mb-5">
                <div className="card h-100">
                    <div>
                        <Link key={item.id} exact to={`/item/${item.id}`}>
                            <img className="card-img-top" src={item.img} alt="..." />
                        </Link>
                    </div>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder text-decoration-none">{item.title}</h5>
                            <h4>$ {item.price}</h4>
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">Add To Cart</a></div>
                            <div>
                                <p className="mt-2 text-center">Units available: {item.stock}</p>
                            </div> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item
