import { useState } from "react"

export default function StateApiLoadinf() {

  const [starship, setStarship] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function clickHandle() {
    setIsLoading(true)

    const response = await fetch('https://swapi.dev/api/starships/10')
    const data = await response.json()
    setStarship(JSON.stringify(data, null, "\t"))

    setIsLoading(false)
  }

  let message = <p></p>
  if(isLoading){
    message = <p>Loading...</p>
  }

  return(
    <main className="main">
      <hr />
      <h1>useState use case</h1>
      <h3>Get Api Data and store in state</h3>

      <button className="btnAction" onClick={clickHandle}>Get Millenium falcon data</button>
      <p>{message}</p>
      <pre>{starship}</pre>
    </main>

  )
}
