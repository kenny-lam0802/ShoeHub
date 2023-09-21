import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Homepage from './components/Homepage';
import AddShoeForm from './components/AddShoeForm';
import EditShoeForm from './components/EditShoeForm';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [shoes, setShoes] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Homepage shoes={shoes} setShoes={setShoes} />} />
          <Route path='/create/new' element={<AddShoeForm shoes={shoes} setShoes={setShoes} />} />
          <Route path='/edit/shoe/:id' element={<EditShoeForm/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
