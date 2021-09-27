import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Ref2() {

  const myDiv = useRef(null);
  const [counter, setCounter] = useState(0);

  const ShowCounter = ({ counter }: any) => {
    return (
      <p>Counter: {counter}</p>
    )
  }

  return(
    <main className="main">
      <h1>Useref case use 2</h1>
      <p><Link to="/">Voltar</Link></p>

      <div ref={myDiv}>
        <button className="btnAction" onClick={() => setCounter(old => old + 1)}>Test</button>
        <ShowCounter counter={counter} />
      </div>
    </main>
  )
}
