
import {memo} from 'react';


interface IPropsDisplay {
  digit: number
}

function Display2({digit}: IPropsDisplay) {
  console.log('Child2');

  return (
    <h1>{digit}</h1>
  )
}

/*Render the element only once*/
export default memo(Display2)
