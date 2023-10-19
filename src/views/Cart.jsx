import React from 'react';
import { useAppContext } from '../context/PizzaContext';

function Cart() {
  const { cart, total } = useAppContext();

  return (
    <div>
      <div className='carrito'>
  <h2>Detalles del pedido</h2>
  {cart.map((pizza) => (
    <div className='pizzasCarrito' key={pizza.id}>
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>${pizza.price.toFixed(2)}</p>
      <p>Cantidad: {pizza.quantity}</p>
    </div>
  ))}
  <h3>Total: ${total.toFixed(2)}</h3>
</div>
/</div>
  );
}

export default Cart;

