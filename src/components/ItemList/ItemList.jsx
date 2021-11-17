import React from 'react'
import Item from './Item';
import Spinner from '../Spinner'

const ItemList = ({items}) => {
    return(
        <>
        {items.length
            ? items.map((products) => <Item item={products} key={products.title}/>)
        : <Spinner/> }
        </>
        )
}

export default ItemList