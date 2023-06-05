import React from 'react'

function ItemCard({icon,setindexItem,indexItem,index}) {
    return (
        <a onClick={() => setindexItem(index)} className={`card__item ${indexItem === index && 'active'}`}>
            <span className="material-symbols-outlined">{icon}</span>
        </a>
    )
}

export default ItemCard