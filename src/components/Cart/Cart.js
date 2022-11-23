import CartItem from './CartItem';
import './Cart.css';
import { useSelector } from 'react-redux';


const ADD_PRODUCE = "Cart/ADD_PRODUCE"
const REMOVE_PRODUCE = "Cart/REMOVE_PRODUCE"

export const addProduce = (itemId) => {
  // let item = {};
  // item[itemId] = 
    return {
        type: ADD_PRODUCE,
        itemId: itemId
    }
}

export const removeProduce = (itemId) => {
  return {
    type: REMOVE_PRODUCE,
    itemId: itemId
  }
}

export const cartReducer = (state = {}, action) => {
  Object.freeze(state)

  const nextState = {...state}

  switch (action.type) {
      case ADD_PRODUCE:
          nextState[action.itemId] = {id: action.itemId, count: 1}
          return nextState;
      case REMOVE_PRODUCE:
        delete nextState[action.itemId]
        return nextState;
      default:
          return state;
  }
}



function Cart() {
  // const cart = {};
  const cart = useSelector(state => state.cart);

  const produce = useSelector(state => state.produce);

  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...produce[item.id]
      };
    });

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;