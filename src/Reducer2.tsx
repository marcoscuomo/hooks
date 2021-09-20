import { useReducer } from "react"
import { Link } from "react-router-dom"
import { loginHelper } from "./loginHelper"


interface IState {
  username: string,
  password: string,
  isLoading: boolean,
  isLoggedIn: boolean,
  isError: boolean
}

function myReducer(prevState: any, action: any) {

  switch(action.type) {
    case 'USERNAME':
      return {
        ...prevState,
        username: action.payload
      }
    case 'PASSWORD':
      return {
        ...prevState,
        password: action.payload
      }
    case 'LOGGED_IN':
      return {
        ...prevState,
        isLoggedIn: true
      }
    case 'LOGGED_OUT':
      return {
        ...prevState,
        isLoggedIn: false,
        username: '',
        password: ''
      }
    case 'IS_LOADING':
      return {
        ...prevState,
        isLoading: true
      }
    case 'IS_NOT_LOADING':
      return {
        ...prevState,
        isLoading: false
      }
    case 'ERROR':
      return {
        ...prevState,
        isError: true,
        isLoading: false
      }
    default:
      break
  }
}

const initialState: IState = {
  username: '',
  password: '',
  isLoading: false,
  isLoggedIn: false,
  isError: false
}


export default function Reducer2() {

  const [state, dispatcher] = useReducer(myReducer, initialState)

  const passwordHandler = (e: any )=> {
    dispatcher({type: 'PASSWORD', payload: e.target.value})
  }

  const usernameHandler = (e: any) => {
    dispatcher({type: 'USERNAME', payload: e.target.value})
  }

  const logoutHandler = (e: any) => {
    dispatcher({type: 'LOGGED_OUT'} )
  }

  const submitHandler = async (e: any) => {
    e.preventDefault()

    try {
      dispatcher({type: 'IS_LOADING'})
      await loginHelper({username: state.username, password: state.password})
      dispatcher({type: 'IS_NOT_LOADING'})
      dispatcher({type: 'LOGGED_IN'})
    } catch {
      dispatcher({type: 'ERROR'})
      alert('Incorrect username or password')
    }
  }

  return (
    <main className="main">
      <h1>Reducer use case </h1>
      <h2>Modify complex states, such as arrays or objects: login form</h2>
      <p><Link to="/">Voltar</Link></p>

      <div className="container_login">
        {state.isLoggedIn
          ? <>
              <p className="title-dark">Welcome!</p>
              <button className="btnAction" onClick={logoutHandler}>Log out!</button>
            </>
          : <form onSubmit={submitHandler}>
              <div className="login_row">
                <label htmlFor="username" className="label_login">Username</label>
                <input
                  type="text"
                  id="username"
                  onChange={usernameHandler}
                  value={state.username}
                  placeholder='user'
                />
              </div>
              <div className="login_row">
                <label htmlFor="password" className="label_login">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={passwordHandler}
                  value={state.password}
                  placeholder="password"
                />
              </div>
              <div className="login_row">
                <button className="btnAction" type="submit" disabled={state.isLoading}>{state.isLoading ? 'Loading you in...': 'Log in'}</button>
              </div>
            </form>
        }
      </div>
    </main>
  )
}
