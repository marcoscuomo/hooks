import React, { createContext } from 'react'

export interface IDataProps {
  number: number,
  text: string
}

const data: IDataProps = {
  number: 123,
  text: 'Context Api...'
}

export const appCtxDefaultValue = {
  state: data,
  setState: (state:IDataProps) => {}
}

export const DataContext = createContext(appCtxDefaultValue)

