
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment ,reset,incrementByAmount} from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0);
  //for setting the value of the variable 
const count = useSelector((state)=>state.counter.value);
// dispatch means directly to call the function 
const dispatch = useDispatch();

function handleIncrementClick(){
  dispatch(increment());
}

function handleDecrementClick(){
  dispatch(decrement());
}

function handleResetClick(){
  dispatch(reset());
}



function handleIncAmountClick(){
  dispatch(incrementByAmount(amount))
}
  return (

    <div className='container'>
<button onClick={handleIncrementClick}>+</button>
<p>Count:{count}</p>
<button onClick={handleDecrementClick}>-</button>

<button onClick={handleResetClick}>reset</button>
<input 
type='number'
value={amount}
placeholder='enter value'
onChange={(e)=>setAmount(e.target.value)}
/>

<button onClick={handleIncAmountClick}>Increment by amount</button>

    </div>
  
  )
}

export default App
