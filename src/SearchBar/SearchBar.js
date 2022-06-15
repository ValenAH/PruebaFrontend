import React from 'react';
import logo_ML from '../Assets/Logo_ML.png';
import search_icon from '../Assets/ic_Search.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './SearchBar.css';


function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    let navigate = useNavigate();

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const onSearchEvent = () => {
        navigate(`/items?search=${searchValue}`, { replace: false });
    }

    return (
        <header>
            <img className="logoML" src={logo_ML} alt="logo_MercadoLibre"/>
            <input
                className='itemSearch'
                placeholder="Nunca dejes de buscar"
                value = {searchValue}
                onChange = {onSearchValueChange}
                />
            <img className="iconSearch" src={search_icon} alt="Buscar"
                onClick={onSearchEvent}
            />
        </header>
    )
}

export { SearchBar };