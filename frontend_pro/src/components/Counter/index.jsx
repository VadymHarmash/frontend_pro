import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/reducers/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  const incrementValue = () => {
    dispatch(increment());
  };

  const decrementValue = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={decrementValue}>-</button>
      <button onClick={incrementValue}>+</button>
    </div>
  );
};
