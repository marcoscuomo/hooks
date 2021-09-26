import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { AppContext } from './data/Store'

export default function Context2() {

  const { number, text, updateNumber, updateText } = useContext(AppContext)

  useEffect(() => {
    number % 2 === 0 ? updateText('Even') : updateText('Odd')
  }, [number])

  return (
    <main className="main">
      <h1>Context Api use case</h1>
      <p><Link to="/">Voltar</Link></p>
      <p>{number}</p>
      <p>{text}</p>

      <button className="btnAction" onClick={() => updateNumber(number-1)}>-1</button>
      <button className="btnAction" onClick={() => updateNumber(number+1)}>+1</button>
    </main>
  )
}
