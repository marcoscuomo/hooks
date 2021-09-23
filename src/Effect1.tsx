import { useEffect, useState } from "react"

export default function Effect1() {

  const [bio, setBio] = useState({})

  useEffect((): any => {

    let mounted = true

    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/people/1/')
      const data = await response.json()
      console.log(data)

      if(mounted){
        setBio(data)
      }

    }
    fetchData()

    return () => mounted = false
  }, [])
  // Emoty dependecies array will make useEffect to run only once at startup because that array never changes

  return(
    <main className="main">
      <h1>UseEffect use case</h1>
      <h2>Runnig once on mount: fetch API data</h2>
      <p>Luke Skywalker`s Bio:</p>
      <pre>{JSON.stringify(bio, null, '\t')}</pre>
    </main>
  )
}
