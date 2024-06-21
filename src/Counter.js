import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/CounterSlice";

function Counter() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div className="Counter">
            <h2>{state.counterSlice.count}</h2>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        </div>
    );
}

export default Counter;
