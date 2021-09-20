import { useState } from "react";
import { Link } from "react-router-dom";

export default function StateToggle() {


  const [mode, setMode] = useState(false)


  const clickHandle = () => {
    setMode(prevState => !prevState)
  }

  const toggleClass = mode ? 'main dark ': 'main light'

  return (
    <main className={toggleClass}>
      <h1>UseState use case</h1>
      <h3>Toggle flags</h3>
      <p><Link to="/">Voltar</Link></p>
      <hr />

      <div className="actions">
        <button className="btnAction" onClick={clickHandle}>Set condition</button>
      </div>

    </main>
  )
}
