import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';


function App() {
    return (
        <div className='App'>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/Cruiser/:id' element={<ItemListContainer/>} />
            <Route path='/Touring/:id' element={<ItemDetailContainer/>}  />
            <Route path='/Sport/:id' element={<ItemListContainer/>} />
            <Route path='/Carrito/:id' element={<ItemListContainer/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
        </BrowserRouter>
        <ItemListContainer greeting="Hola Mundo!" />
        </div>
    );
}

export default App

