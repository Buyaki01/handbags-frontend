import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Handbags from './components/handbags/Handbags';
import HandbagDetails from './components/handbags/HandbagDetails';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={( <Handbags /> )} />
      <Route path="/details" element={( <HandbagDetails /> )}/>
    </Routes>
  </div>
);
export default App;
