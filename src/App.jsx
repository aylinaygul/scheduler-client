import Home from './screens/Home.tsx';
import React from 'react';
import MainLayout from './layouts/MainLayout.tsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Navigate to='/home' />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
