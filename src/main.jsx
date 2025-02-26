import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';

import MainLayout from './layouts/Main';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
