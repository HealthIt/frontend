import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, BMIPage, RecommendPage, SearchPage, DetailPage } from './pages';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/bmi' element={<BMIPage />} />
          <Route path='/recommend' element={<RecommendPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
