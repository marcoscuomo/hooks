import { useReducer } from "react";
import { Link } from "react-router-dom";

function myReducer(prevState: any, action: any) {

  let cart;

  switch(action.type) {
    case 'ADD':
      cart = [...prevState]
      cart.push(action.payload)
      return cart
    case 'REMOVE':
      cart = [...prevState]
      cart.pop()
      return cart
    case 'CLEAR':
      return prevState = []
    default:
      break;
  }
}


export default function Reducer3() {

  const [state, dispatcher] = useReducer(myReducer, []);

  function addCart() {
    dispatcher({
      type: 'ADD',
      payload: 'Iphone 5'
    })
  }

  function removeCart() {
    dispatcher({type: 'REMOVE'})
  }

  function clearCart() {
    dispatcher({type: 'CLEAR'})
  }

  return (
    <main className="main">
      <h1>Use Reducer use case 3</h1>
      <p><Link to="/">Voltar</Link></p>

      <div>
        <button className="btnAction" onClick={addCart}>[+] Add cart</button>
        <button className="btnAction" onClick={removeCart}>[-] Remove item</button>
        <button className="btnAction" onClick={clearCart}>[x] Clear cart</button>
      </div>

      <div>
        <h2>Cart</h2>
        <p><b>{state?.length === 0 && '(Cart Empty)'}{state?.join(' - ')}</b></p>
      </div>

    </main>
  )
}
