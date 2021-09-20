import { useState } from "react";
import { Link } from "react-router-dom";

export default function StateConditional() {

  const [condition, setCondition] = useState(false)

  const clickHandler = () => {
    setCondition(true)
  }

  return(
    <main className="main">
      <h1>UseState Conditional</h1>
      <h3>Condiotional Rendering</h3>
      <p><Link to="/">Voltar</Link></p>
      <hr />

      <div className="actions">
        <button className="btnAction" onClick={clickHandler}>Set condition</button>
        {condition && <p>Hello!</p>}
      </div>

    </main>
  )
}
