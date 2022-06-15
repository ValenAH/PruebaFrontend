import React, { useEffect, useState } from "react";
import './ItemDescription.css';
import { useParams } from 'react-router-dom';
import { Category } from "../Category/Category.js";


function ItemDescription(props) {
    const params = useParams();
    const itemId = params.id;
    const [item, setItem] = useState({});
    const [description, setDescription] = useState('');
    useEffect(() => {
        if (itemId) {
            console.log(itemId);

            const getData = (searcher) => {
                fetch(`https://api.mercadolibre.com/items/${searcher}`)
                    .then(response => response.json()) //consulta
                    .then(data => {
                        console.log(data);
                        const mappedResult = {
                            id: data.id,
                            title: data.title,
                            picture: data.thumbnail,
                            price: data.price
                        }
                        setItem(mappedResult);
                        console.log(mappedResult);
                    })
            }
            getData(itemId);
        }
    }, [itemId])
    useEffect(() => {
        if (itemId) {
            console.log(itemId);

            const getData = (searcher) => {
                fetch(`https://api.mercadolibre.com/items/${searcher}/description`)
                    .then(response => response.json()) //consulta
                    .then(data => {
                        setDescription(data.plain_text);
                    })
            }
            getData(itemId);
        }
    }, [itemId])

    return (
        <>
            <Category/>
            <div className="DetailsContainer">
                <div className="productDetails">
                    <div className="leftContainer">
                        <img className="imgItem" src={item.picture}></img>
                    </div>
                    <div className="rightContainer">
                        <h2 className="itemTitle">{item.title}</h2>
                        <h1 className="itemPrice">$ {item.price}</h1>
                        <button className="btnBuy">Comprar</button>
                    </div>
                </div>
                <div className="productDescription">
                    <h2>Descripción del Producto</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export { ItemDescription };