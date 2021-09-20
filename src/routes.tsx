import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import UseStateHook from './UseStateHook';
import StateConditional from './StateConditional';
import StateToggle from './StateToggle';
import StateApiLoading from './StateApiLoading';
import Reducer1 from './Reducer1';
import Reducer2 from './Reducer2';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route component = { Home } path="/" exact />
      <Route component = { UseStateHook } path="/useStateHook" exact />
      <Route component = { StateConditional } path="/stateConditional" exact />
      <Route component = { StateToggle } path="/stateToggle" exact />
      <Route component = { StateApiLoading } path="/stateApiLoading" exact />
      <Route component = { Reducer1 } path="/reducer1" exact />
      <Route component = { Reducer2 } path="/reducer2" exact />

    </BrowserRouter>
  )
}
