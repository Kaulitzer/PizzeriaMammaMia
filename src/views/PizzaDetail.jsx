import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/PizzaContext';
import '../App.css';

function PizzaDetail() {
  const { pizzas, setCart } = useAppContext();
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    if (id) {
      console.log(id);
      let pizzaNew = pizzas.find((p) => p.id === id);
      setPizza(pizzaNew);
    }
  }, [id]);

  const addToCart = (pizza) => {
    if (pizza) {
      setCart((prevCart) => [...prevCart, pizza]);
    }
  };

  return (
    <>
      {pizza ? (
        <div className="vistaPizza">
          <div className="Imagen">
            <img src={pizza.img} alt={pizza.name} />
          </div>
          <div className="datosVistaPizza">
            <h1>{pizza.name}</h1>
            <p>{pizza.desc}</p>
            <h3>Ingredientes:</h3>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Precio:</h3>
            <p>${pizza.price.toFixed(2)}</p>
            <button onClick={() => addToCart(pizza)}>Añadir</button>
          </div>
        </div>
      ) : (
        <h1>No hay pizza</h1>
      )}
    </>
  );
}

export default PizzaDetail;
