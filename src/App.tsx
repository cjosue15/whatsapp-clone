import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Whatsapp } from './pages/Whatsapp';
import { Login } from './pages/Auth/Login';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Whatsapp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
