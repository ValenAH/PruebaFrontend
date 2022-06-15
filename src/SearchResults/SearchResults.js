import React, { useState, useEffect } from 'react';
import { Category } from '../Category/Category.js'
import './SearchResults.css';
import { Item } from '../Item/Item.js'
import { useSearchParams } from "react-router-dom";


function SearchResults() {
    let [searchParams] = useSearchParams();
    const searcher = searchParams.get('search');
    const [items, setItems] = useState([]);


    useEffect(() => {
        const getData = (searcher) => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${searcher}`)
                .then(response => response.json()) //consulta
                .then(data => {
                    console.log(data);
                    const listResults = data.results.map(result => ({
                        id: result.id,
                        title: result.title,
                        picture: result.thumbnail,
                        price: result.price
                    }))
                    setItems(listResults);
                    console.log(listResults);
                })
        }
        getData(searcher);
    }, [searcher])

    return (
        <>
            <Category/>
            <section className='ResultsContainer'>
                <ul>
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            picture={item.picture}
                            price={item.price}
                        />

                    ))}
                </ul>
            </section>
        </>
    )
}

export { SearchResults };