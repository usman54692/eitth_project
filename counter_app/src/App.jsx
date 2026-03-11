import { useState } from 'react';
import './App.css';

import { decrement, increment, incrementByAmount } from './redux/features/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <input
        type="number"
        placeholder="Enter Your Number"
        
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment By Amount
      </button>
    </>
  );
}

export default App;