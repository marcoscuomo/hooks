import { useEffect, useState } from "react"

export default function Effect2() {

  const [input, setInput] = useState('')
  const [isValid, setIsValid]= useState(false)

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  useEffect(() => {
    console.log(input.length)
    if(input.length < 5 || /\d/.test(input)){
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [input])

  return(
    <main className="main">
      <h1>UseEffect use case</h1>
      <h2>Running on state change: Validating input field</h2>
      <hr />

      <form className="form_effect">
        <label htmlFor="input">Write someting (more than 5 non numerical characteres is a valid inout)</label>
        <input type="text" id="input" autoComplete="off" onChange={inputHandler}  />
      </form>
      <p>
        <span style={isValid ? {backgroundColor: 'lightgreen', padding: '.5rem'} : {backgroundColor: 'lightpink', padding: '.5rem'}}>
          {isValid ? 'Valid input' : 'Input not valid'}
        </span>
      </p>
    </main>
  )
}
