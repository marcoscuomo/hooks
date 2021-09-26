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
        <li>
          <Link to="/effect1">Use Effect 1 - fetch API</Link>
        </li>
        <li>
          <Link to="/effect2">Use Effect 2 - Validating input field</Link>
        </li>
        <li>
          <Link to="/effect3">Use Effect 3 - Live filtering</Link>
        </li>
        <li>
          <Link to="/context1">Use Contex api</Link>
        </li>
        <li>
          <Link to="/context2">Use Contex api - top organized</Link>
        </li>
      </ul>
    </main>
  )
}
