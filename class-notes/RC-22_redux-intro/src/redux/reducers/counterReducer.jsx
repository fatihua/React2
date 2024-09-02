import React from 'react'
//! action sayfasını burada yazdık

export const arttir =()=>({type:"ARTTIR", payload1:"ARTTIRILDI"})
export const azalt =()=>({type:"AZALT"})
export const sifirla =()=>({type:"SIFIRLA", payload1:"SIFIRLANDI"})



// const counterReducer = (state={sayac:0, text1:""},action1) => {
const counterReducer = (state={sayac:0, text1:""},{type, payload1}) => {
  switch (type) {
    case "ARTTIR":
      return{sayac:state.sayac+1, text1:payload1}
    case "AZALT":
      return{sayac:state.sayac-1}
    case "SIFIRLA":
      return{sayac:0, text1:payload1}
    default:
      return state
  }
  
  return (
    <div>counterReducer</div>
  )
}

export default counterReducer