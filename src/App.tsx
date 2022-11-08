import React from 'react';
import './App.css';
import './reset.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, BMIPage, RecommendPage, SearchPage, DetailPage } from './pages';
import { Header } from './components/common/Header';

function App() {
  return (
    <div className='App'>
      <Header />
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
