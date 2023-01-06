import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  MainPage,
  BMIPage,
  RecommendPage,
  SearchPage,
  DetailPage,
  LoadingPage,
  ErrorPage,
  ResultPage,
} from './pages';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/bmi' element={<BMIPage />} />
          <Route path='/result' element={<ResultPage />} />
          <Route path='/loading' element={<LoadingPage />} />
          <Route path='/recommend' element={<RecommendPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/detail' element={<DetailPage />}>
            <Route path=':detailId' element={<DetailPage />} />
          </Route>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
