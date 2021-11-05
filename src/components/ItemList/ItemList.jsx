import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
    return(
        <>
        {items.length
            ? items.map((products) => <Item item={products} key={products.id}/>)
        : 'Cargando productos...'}
        </>
        )
}

export default ItemList