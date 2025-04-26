import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/navbar';
import LoginPage from './Components/login';
import SecondPage from './Components/secondPage';
import Works from './Components/Works';
import Para from './Components/para';
import Little from './Components/little';
import Faqs from './Components/faqs';
import Blue from './Components/blue';
import Footer from './Components/footer';
import LearningPaths from './Components/learning';
import ArticlesPaths from './Components/articles';
import Cards from './Components/cards';
import './App.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';
  const showFooter = location.pathname === '/learning' || location.pathname === '/articles';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SecondPage />
              <Works />
              <Para />
              <Little />
              <Faqs />
              <Blue />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/learning"
          element={
            <>
              <LearningPaths />
              {showFooter && <Footer />}
            </>
          }
        />
        <Route
          path="/articles"
          element={
            <>
              <ArticlesPaths />
              <Cards/>
              {showFooter && <Footer />}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
