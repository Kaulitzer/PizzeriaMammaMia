import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/PizzaContext';

function Home() {
  const { pizzas, setCart } = useAppContext();

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((p) => p.id === pizza.id);
      if (existingPizza) {
        existingPizza.quantity += 1;
        return [...prevCart];
      } else {
        pizza.quantity = 1;
        return [...prevCart, pizza];
      }
    });
  };
  
  return (
      <div>
          <h1>Pizzería MammaMía</h1>
      <div className="pizza-cards">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className='tarjeta'>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <h3>Ingredientes: </h3>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Precio: ${pizza.price.toFixed(2)}</p>
                <div className='botonesHome'>
            <button onClick={() => addToCart(pizza)}>Añadir</button>
            <Link to={`/pizza/${pizza.id}`}>Ver más</Link>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
