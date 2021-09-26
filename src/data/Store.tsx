import React, { createContext, ReactChild, ReactChildren, useState } from 'react';

const initialState: any = {
  number: 1234,
  text: 'Context Api + Hooks'
}

export const AppContext = createContext(initialState)

const Store = ({ children }: any) => {

  const [state, setState] = useState(initialState)

  function updateNumber(n: number) {
    setState({
      ...state,
      number: n
    })
  }

  function updateText(text: string) {
    setState({
      ...state,
      text
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      updateNumber,
      updateText
    }}>
      {children}
    </AppContext.Provider>
  )

}


export default Store
