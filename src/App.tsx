import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Whatsapp } from './pages/Whatsapp';
import { Login } from './pages/Auth/Login';
import { useEffect } from 'react';
import { useSocketStore } from './context/socketContext';
import { SessionEvents } from './socket/events/session';

export const App = () => {
  const { socket } = useSocketStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Whatsapp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
