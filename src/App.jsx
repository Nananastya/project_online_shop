
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './pages/CartPage';
import LikedPage from './pages/LikedPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import { FunctionProvider } from './components/FunctionProvider';

export default function App() {
    return (
      <>
        <FunctionProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/liked" element={<LikedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </FunctionProvider>  
      </>  
      
    );
}