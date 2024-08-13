import React, { useContext } from 'react'
import { StudentContext } from '../App'

const OgrenciItem = () => {

  //!3 context consumer/ globalde (mesela App.js'de) tanımladığım değerleri buraya çağırdık

const {students, changeColor} = useContext(StudentContext)

  return (
    <div>
    {students.map((i)=>(
      <div key={i.id} style={{backgroundColor:i.color}}>
        <h3>Name: {i.name}</h3>
        <h4>Email:{i.email}</h4>
        <h4>Age:{i.age}</h4>
        Color : <input type='text' value={i.color}
        onChange={(e)=>changeColor(i.id, e.target.value)} 

        />
      </div>
    ))}
    </div>
  )
}

export default OgrenciItem