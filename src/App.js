import React from 'react';
import NavBar from './components/navBar'; 
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div className='App'>
        <NavBar />
        <ItemListContainer greeting="Hola Mundo!" />
        </div>
    );
}

export default App

