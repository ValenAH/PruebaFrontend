import React from 'react';
import './Item.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Item(props) {
    let navigate = useNavigate();

    const onSearchEvent = () => {
        navigate(`/items/${props.id}`, { replace: false });
    }

    return (
        <>
            <li className='ItemList'
                onClick={onSearchEvent}
            >
                <div className='imgContainer'>
                    <img className="itemImage" alt='itemImage' src={props.picture}></img>
                </div>
                <div className='itemProperties'>
                    <h2 className="price">$ {props.price}</h2>
                    <p className="title">{props.title}</p>
                </div>
            </li>
            <hr className='line' />
        </>
    )
}

export { Item };