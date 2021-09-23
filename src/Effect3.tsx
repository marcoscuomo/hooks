import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface ITypesUniverse {
  key: string,
  type: string,
  value: string
}

const universe: ITypesUniverse[] = [
  {key: '1', type: 'planet', value: 'Tattoine'},
  {key: '2', type: 'planet', value: 'Alderan'},
  {key: '3', type: 'startship', value: 'Death star'},
  {key: '4', type: 'startship', value: 'CR 90 Corvette'},
  {key: '5', type: 'startship', value: 'Start Destryer'},
  {key: '6', type: 'planet', value: 'Luke Skywalker'},
  {key: '7', type: 'planet', value: 'Darth Vader'},
  {key: '8', type: 'planet', value: 'Leia Organa'},
]

export default function Effect3() {

  const [inputValue, setInputValue] = useState('')
  const [inputType, setInputType] = useState('')
  const [filteredArray, setFilteredArray] = useState<ITypesUniverse[]>(universe)
  console.log(filteredArray);
  const inputValueHandler = (e: any) => {
    setInputValue(e.target.value)
  }

  const inputTypeHandler = (e: any) => {
    setInputType(e.target.value)
  }

  useEffect(() => {
    setFilteredArray((_: any) => {
      return universe.filter(item => item.value.includes(inputValue)).filter(item => item.type.includes(inputType))
    })
  }, [inputValue, inputType])

  //Prepare array to be rendered
  const listItens = filteredArray.map((item: ITypesUniverse) => (
    <>
      <tr>
        <td style={{ border: '1px solid lightgray', padding: '10px' }}>{item.type}</td>
        <td style={{ border: '1px solid lightgray', padding: '10px' }}>{item.value}</td>
      </tr>
    </>
  ))


  return(
    <main className="main">
      <h1>useEffect use case</h1>
      <h2>Running on state change: liveFiltering</h2>
      <p><Link to="/">Voltar</Link></p>

      <form style={{maxWidth: '23rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <label htmlFor="input-type">Filter by <b>type</b></label><br />
          <input type="text" id="input-type" autoComplete="off" onChange={inputTypeHandler} style={{height: '1.5rem', width: '10rem', margin: '1rem 0' }} />
        </div>
        <div>
          <label htmlFor="input-value">Filter by <b>value</b></label><br />
          <input type="text" id="input-value" autoComplete="off" onChange={inputValueHandler} style={{height: '1.5rem', width: '10rem', margin: '1rem 0' }} />
        </div>
      </form>
      <br />
      <table style={{width: '100%', border: '1px solid gray', padding: '0 1rem'}}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {listItens}
        </tbody>
      </table>
    </main>
  )
}
