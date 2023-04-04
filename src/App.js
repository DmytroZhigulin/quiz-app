import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import QuizPage from './pages/QuizPage';
import FavoritePage from './pages/Favourite';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<QuizPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

