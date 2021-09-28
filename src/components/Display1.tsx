
import {memo} from 'react';


interface IPropsDisplay {
  digit: number
}

function Display1({digit}: IPropsDisplay) {
  console.log('Child1');

  return (
    <h1>{digit}</h1>
  )
}

/*Render the element only once*/
export default memo(Display1)
