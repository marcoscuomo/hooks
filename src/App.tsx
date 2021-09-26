import React, { useState, Dispatch, SetStateAction } from 'react';

import Routes from './routes';
import './App.css';
import { DataContext, appCtxDefaultValue} from './data/DataContext'
import Store from './data/Store';


function App() {

  const [state, setState] = useState(appCtxDefaultValue.state)


  return (
    <>
    <Store>
      <DataContext.Provider value={{state, setState}}>
        <Routes />
      </DataContext.Provider>
    </Store>
    </>
  );
}

export default App;
