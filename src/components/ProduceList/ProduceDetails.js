import { useDispatch } from 'react-redux';
import { addProduce } from '../Cart/Cart.js'

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const addIncrementProduce = (itemId) => {

  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addProduce(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;