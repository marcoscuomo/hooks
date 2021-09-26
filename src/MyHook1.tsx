import { Link } from "react-router-dom";
import {useCounter} from "./hooks/useCounter";

interface IMyHook {
  count: number,
  inc: () => {},
  dec: () => {}
}

export default function MyHook1() {

  const [count, inc, dec] = useCounter()

  return(
    <main className="main">
     <h1>My Hook 1 use Case</h1>
      <p><Link to="/">Voltar</Link></p>

      <p>{count}</p>
      <button className="btnAction" onClick={() => inc()}>+1</button>
      <button className="btnAction" onClick={() => dec()}>-1</button>
    </main>
  )
}
