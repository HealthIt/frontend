import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, BMIPage, RecommendPage, SearchPage, DetailPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/bmi' element={<BMIPage />} />
        <Route path='/recommend' element={<RecommendPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
