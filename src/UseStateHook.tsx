import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function useStateHook() {

  const [state, setState] = useState('initial value');

  console.log('This is a re-render');

  const clickHandler = () => {
    setState('new Value');
  }

  return(
    <main className="main">
      <h1>UseState</h1>
      <h3>State Management</h3>
      <p><Link to="/">Voltar</Link></p>
      <hr />

      <div className="actions">
        <button className="btnAction" onClick={clickHandler}>Set State</button>
        <p>{state}</p>
      </div>

    </main>
  )
}
