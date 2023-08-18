'use client'

import { useState } from "react"
export default function stylechapter() {
    const [color, customColor]=useState({color:"green"})
  return (
    <div>

        <h1>Hellow User</h1>
        <h2>User Heading 1</h2>
        <h3 style={color}>HEllo this is heading 3</h3>
        <button onClick={()=>customColor({color:"purple"})}>Change Color</button>
    </div>
  )
}

export function generateMetaData() {
    return{ 
        title: 'hello',
        description: 'hello2'
    }
  
  }
