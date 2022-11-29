import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navcom from './pages/weathernavbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navcom />} exact />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
