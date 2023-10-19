import React, { createContext, useState, useContext, useEffect } from 'react';
import pizzasData from '../pizzas.json';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [pizzas, setPizzas] = useState(pizzasData);

  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);

  const calculateTotal = (cart) => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <AppContext.Provider value={{ cart, setCart, total, setTotal, pizzas }}>
      {children}
    </AppContext.Provider>
  );
}
