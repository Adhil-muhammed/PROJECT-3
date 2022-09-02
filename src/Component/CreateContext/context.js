
import React from 'react'
import {createContext,useState} from 'react'
export const PassContext=createContext(null)

function Context({children}) {
    const [data,setData]=useState("It me Jarvis")
  return (
    <PassContext.Provider value={{data,setData}}>
        {children}
    </PassContext.Provider>
  )
}

export default Context
 