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
        <li>
          <Link to="/myhook1">My Hook1</Link>
        </li>
        <li>
          <Link to="/ref1">Use Ref 1</Link>
        </li>
        <li>
          <Link to="/ref2">Use Ref 2</Link>
        </li>
        <li>
          <Link to="/callback">Use Callback</Link>
        </li>
        <li>
          <Link to="/reducer3">Use Reducer - Case 3</Link>
        </li>
        <li>
          <Link to="/ref3">Use Ref - Case 3</Link>
        </li>
      </ul>
    </main>
  )
}
