import { useContext } from "react"
import { DataContext } from "./data/DataContext"


export default function Context1() {

  const { state, setState } = useContext(DataContext)

  function setNumber(n: number) {
    setState({
      ...state,
      number: state.number + n
    })
  }

  return(
    <main className="main">
      <h1>Context api use case</h1>

      <div>
        <p>{state.text}</p>
        <p>{state.number}</p>
      </div>

      <div>
        <button className="btnAction" onClick={() => setNumber(+1)}>+1</button>
        <button className="btnAction" onClick={() => setNumber(-1)}>-1</button>
      </div>
    </main>
  )
}
