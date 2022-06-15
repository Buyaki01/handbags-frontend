import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Handbags from './components/handbags/Handbags';
import HandbagDetails from './components/handbags/HandbagDetails';
import AddToCart from './components/handbags/AddToCart.js'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={( <Handbags /> )} />
      <Route path="/details" element={( <HandbagDetails /> )}/>
      <Route path="/cart" element={( <AddToCart /> )}/>
    </Routes>
  </div>
);
export default App;
