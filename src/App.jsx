import { useReducer } from 'react'
import './App.css'

const initialCount = { count: 0 }

const countReducer = ( state, action ) => {
  switch(action.type) {
    case 'increment':
      return {...state, count: state.count + 1}
    case 'decrement': 
      return {...state, count: state.count - 1}
    case 'reset':
      return {...state, count: 0}
    default:
      return state
  }
}

function App() {
  const [countState, dispatch] = useReducer(countReducer, initialCount);

  return (
    <>
      <h1>WorkFlow System UI</h1>
      <p>Count: {countState.count}</p>
      <button type='button' onClick={() => dispatch({type: 'increment'})}>INC</button>
      <button type='button' onClick={() => dispatch({type: 'decrement'})}>DEC</button>
      <button type='button' onClick={() => dispatch({type: 'reset'})}>RESET</button>
    </>
  )
}

export default App
