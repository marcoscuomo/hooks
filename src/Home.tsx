import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return(
    <main className="main">
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/useStateHook">Use State</Link>
        </li>
        <li>
          <Link to="/stateConditional">Use State Conditional</Link>
        </li>
        <li>
          <Link to="/stateToggle">Use State Toggle</Link>
        </li>
        <li>
          <Link to="/stateApiLoading">Use State Api Loading</Link>
        </li>
        <li>
          <Link to="/reducer1">Use Reducer 1 - Manipulating an array</Link>
        </li>
        <li>
          <Link to="/reducer2">Use Reducer 2 - Authentication</Link>
        </li>
      </ul>
    </main>
  )
}
