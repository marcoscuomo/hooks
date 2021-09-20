import { useReducer } from "react";
import { Link } from "react-router-dom";

function myReducer(prevState: any, action: any) {
  let array;

  switch(action.type) {
    case 'ADD':
      array = [...prevState]
      array.push(action.payload)
      return array
    case 'REMOVE':
      array = [...prevState]
      array.pop()
      return array
    case 'CLEAR':
      return prevState = []
    default:
      break
  }
}

export default function Reducer1() {

  const [state, dispatcher] = useReducer(myReducer, ['initial value'])
  console.log(state)

  //Three diferent state triggers
  function addHandler() {
    dispatcher({type: 'ADD', payload: Math.round((Math.random() * 100 + 100)) })
  }

  function removeHandler() {
    dispatcher({type: 'REMOVE'})
  }

  function clearHandler() {
    dispatcher({type: 'CLEAR'})
  }

  return (
    <main className="main">
      <h1>Reucer 1</h1>
      <h2>Manage multiple states: modify an array</h2>
      <p><Link to="/">Voltar</Link></p>

      <div className="action-buttons">
        <button className="btnAction" onClick={addHandler}>[+] Add random value to array</button>
        <button className="btnAction" onClick={removeHandler}>[-] Remove last value from array</button>
        <button className="btnAction" onClick={clearHandler}>[x] Clear Array</button>
      </div>

      <p>Shopping cart</p>
      <p><b>{state?.length === 0 && '(empty)'}{state?.join(' - ')}</b></p>
    </main>
  )
}
