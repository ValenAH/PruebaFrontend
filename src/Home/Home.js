import React from "react";
import '../SearchBar/SearchBar.js';


function Home (props){
    return (
        <div>
            {props.children}
        </div>
    )
}
export {Home};