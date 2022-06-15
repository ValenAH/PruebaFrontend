import React from 'react';
import { Home } from '../Home/Home.js';
import Routing from '../Routers/index.js';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { Category } from '../Category/Category.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';



//const items = [
//  { id:'01', title:'Iphone', picture: 'url', price: 100},
//  { id:'02', title:'Ipod', picture: '', price: 200},
//  { id:'03', title:'Headset', picture: '', price: 300},
//  { id:'04', title:'Earpods', picture: '', price: 400}
//]

function App() {
  return (
    <BrowserRouter>
      <div>
        <SearchBar />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
