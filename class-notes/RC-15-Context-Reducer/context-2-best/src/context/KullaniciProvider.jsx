import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

//! 1-Create context
export const KullaniciContext = createContext()


const KullaniciProvider = ({children}) => {

const [users, setUsers] = useState([])

useEffect(()=>{

  fetch("http://api.github.com/users").then((res)=>res.json()).then((data)=>setUsers(data))
}, [])


const changeWidth =(id, size)=>{
  setUsers(users.map((a)=>a.id === id ? {...a, width:size} : a))
}


  return (
    <KullaniciContext.Provider value={{users, changeWidth}}>
      {children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider