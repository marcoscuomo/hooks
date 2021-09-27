import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Ref1() {

  const [value1, setValue1] = useState('');
  const count = useRef(0)

  useEffect(() => {
    count.current++;
  }, [value1])

  return(
    <main className="main">
      <h1>Use Ref Use case</h1>
      <p><Link to="/">Voltar</Link></p>

      <div className="form_effect">
        <div>
          <span>Valor: </span>
          <span>{value1}[</span>
          <span>{count.current}</span>
          <span>]</span>
        </div>
        <input type="text" value={value1} onChange={e => setValue1(e.target.value)} />
      </div>


    </main>
  )
}
