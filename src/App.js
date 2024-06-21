import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/CounterSlice";
import { getProducts } from "./slices/ProductsSlice";

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>{state.counterSlice.count}</h2>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => getProducts(dispatch)}>FETCH Products</button>
      {
        state?.productsSlice?.loading ? (
          <h4>Loading...</h4>
        ) : (
          <ul>
            {
              state?.productsSlice?.data?.map((item, index) => (
                <li key={item.productId}>
                  {item?.productName}
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;
