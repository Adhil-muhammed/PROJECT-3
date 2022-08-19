import React,{useContext} from 'react'
import { Appcontext } from '../Appcontext'

function Secondpage() {
    const {data}=useContext(Appcontext)
  return (
    <div>
        <h1> Secondpage</h1>
    <h1>{data}</h1>
    </div>

  )
}

export default Secondpage