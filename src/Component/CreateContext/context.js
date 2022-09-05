
import React from 'react'
import {createContext,useState} from 'react'
export const Signcontext=createContext(null)
export const PassContext=createContext(null)
function Context({children}) {
    const [data,setData]=useState("")
  return (
    <PassContext.Provider value={{data,setData}}>
        {children}
    </PassContext.Provider>
  )
}

export default Context
 