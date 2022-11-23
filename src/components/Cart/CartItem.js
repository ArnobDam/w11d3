import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduce, incrementProduce } from './Cart.js';


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const dispatch = useDispatch();

  const incrementProduceCount = (itemId) => {
      setCount(prevCount => prevCount + 1)
      return dispatch(incrementProduce(itemId))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => incrementProduceCount(item.id)}
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeProduce(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;