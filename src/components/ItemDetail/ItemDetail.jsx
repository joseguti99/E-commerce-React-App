import {useState} from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const ItemDetail = ({item}) => {
    const [flag, setFlag] = useState (true)
    const [countCart, setCountCart] = useState (0)
    //display stock en true para que siempre se muestre

    const onAddClick = (count) =>{
        setFlag(false)
        alert('Se agregaron '+ count + ' items al carrito' )
    };

    return (
        <>
        <div key={item.id}>
            <section className="py-1">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.img} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1"></div>
                        <h1 className="display-5 fw-bolder">{item.title}</h1>
                        <div className="fs-5 mb-5">
                            <span>$ {item.price}</span>
                        </div>
                        <p className="lead">{item.description}</p>
                        <div className="d-flex">
                            <div className="mx-3">
                                {flag && <ItemCount item={item} onAdd={onAddClick} />} 
                            </div>
                        </div>
                        <div className="text-center col-11">
                                {<Link exact to="/Cart"><button className="btn btn-outline-dark flex-shrink-0 mb-2">CartView</button></Link>}
                            </div>
                    </div>
                </div>
            </div>
        </section> 
        </div>
        </>
    )
}

export default ItemDetail;
