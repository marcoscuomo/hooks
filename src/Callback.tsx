import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import Display2 from "./components/Display2";
import Display1 from "./components/Display1";

export default function Callback() {

  const [state, setState] = useState('');
  const [digit1, setDigit1] = useState(0);
  const [digit2, setDigit2] = useState(0);

  const handleIncrement1 = useCallback(() => {
    setDigit1(digit1 + 1)
  }, [digit1])

  const handleIncrement2 = useCallback(() => {
    setDigit2(digit2 + 1)
  }, [digit2])

  const onChangeText = useCallback((event: any) => {
    setState(event.target.value)
  }, [])

  return (
    <main className="main">
      <h1>Usecallback - use case</h1>
      <p><Link to="/">Voltar</Link></p>


      <div className="form_effect">
        <input type="text" value={state} onChange={onChangeText} />
      </div>

      <div className="form_effect">
        <Display1 digit={digit1} />
        <Display2 digit={digit2} />

        <button className="btnAction" onClick={() => setDigit1(digit1 + 1)}>Incremet 1</button>
        <button className="btnAction" onClick={() => setDigit2(digit2 + 1)}>Incremet 2</button>
        <p>-</p>
        <button className="btnAction" onClick={handleIncrement1}>Incremet1 with callback</button>
        <button className="btnAction" onClick={handleIncrement2}>Incremet2 with callback</button>
      </div>


    </main>
  )
}
