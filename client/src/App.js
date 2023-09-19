import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard'
import AddShoeForm from './components/AddShoeForm';
import EditShoe from './components/EditShoe'
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Homepage/>}/>
          <Route path = '/create/new' element={<AddShoeForm/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
