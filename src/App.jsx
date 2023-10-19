import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/PizzaContext';
import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import Cart from './views/Cart';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
