import React from 'react'

export default function Button() {
  return (
    <div>
        <button onClick={()=>{
            alert('hello')
        }}>View price</button>
      
    </div>
  )
}
