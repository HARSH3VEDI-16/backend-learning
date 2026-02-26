import { useDispatch } from "react-redux";
import { addItem, removeItem, resetCart } from "../features/cart/cartSlice";

function Product() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => dispatch(addItem())}>Add Item</button>
      <button onClick={() => dispatch(removeItem())}>Remove Item</button>
      <button onClick={() => dispatch(resetCart())}>Reset Cart</button>
    </div>
  );
}

export default Product;