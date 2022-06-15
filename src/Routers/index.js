import React from "react";
import { Home } from "../Home/Home.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { ItemDescription } from "../ItemDescription/ItemDescription.js";
import { SearchBar } from "../SearchBar/SearchBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";


export default function Routing() {
    return (
        
        <Routes>
            <Route path="/" element={<Home/>}/>                   
            <Route path="/items" element={<SearchResults/>}/>                   
            <Route path="/items/:id" element={<ItemDescription />}/>
        </Routes>
    
    )
}