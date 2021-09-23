import React, { useState, Dispatch, SetStateAction } from 'react';

import Routes from './routes';
import './App.css';
import { DataContext, appCtxDefaultValue} from './data/DataContext'


function App() {

  const [state, setState] = useState(appCtxDefaultValue.state)


  return (
    <>
    <DataContext.Provider value={{state, setState}}>
      <Routes />
    </DataContext.Provider>
    </>
  );
}

export default App;
