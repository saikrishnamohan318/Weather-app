import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navcom from './pages/weathernavbar';
import NewsComponent from './pages/newsnavbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navcom />} exact />
        <Route path='/news' element={<NewsComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
