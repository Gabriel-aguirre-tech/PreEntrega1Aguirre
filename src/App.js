import React from 'react';
import ItemListContainer from './components/itemListContainer';

function App() {
    return (
        <div className='App'>
        <NavBar />
        <ItemListContainer greeting="Hola Mundo!" />
        </div>
    );
}

export default App

