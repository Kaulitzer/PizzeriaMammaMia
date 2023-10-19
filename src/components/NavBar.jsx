import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/PizzaContext';
import "../components/NavStyle.css";

function NavBar() {
  const { cart, total } = useAppContext();

  return (
    <nav className='BarraNavegation'>
      <Link to="/">Pizzería MammaMía</Link>
      <Link to="/cart">Carrito ({cart.length}) - Total: ${total.toFixed(2)}</Link>
    </nav>
  );
}

export default NavBar;
