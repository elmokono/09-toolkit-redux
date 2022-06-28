import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, double } from './store/slicers/counter';
import logo from './logo.svg'
import './App.css'

function App() {

  const { value } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {value}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>Add +1</button>
          <button type="button" onClick={() => dispatch(decrement())}>Substract -1</button>
          <button type="button" onClick={() => dispatch(incrementByAmount(2))}>Add +2</button>
          <button type="button" onClick={() => dispatch(double())}>By 2</button>
        </p>
      </header>
    </div>
  )
}

export default App
