
interface ILoginProps {
  username: string,
  password: string
}

export async function loginHelper({username, password}: ILoginProps): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === 'user' && password === '123') {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}
