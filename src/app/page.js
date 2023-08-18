'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import {useState} from 'react'

export default function Home() {
  const [name, setName]=useState("Ali")
  const favouriteFruit=(fruit)=>{
    return(
      alert(`My Favourite fruite is ${fruit}`)
    )
    
  }

  const router=useRouter()
  const navigation=(name)=>{
    router.push(name)
    
  }
  return (
    <main className={styles.main}>

      <h1>Hello world {name}</h1>
      <Link href='/login'>Go to  Login page</Link>
      <Link href='/about'>Go to About Page</Link>
      <button onClick={()=>{router.push('/login')}}>Go to Login</button>
      <button onClick={()=>navigation('/about')}>Go to ABout</button>
      <button onClick={()=>{setName("Hasssan")}}>Change Name</button>
      <Link href='/product'>Go to product page</Link>
      <User name="Ali"/>
      <User name="Anis"/>
      <User name="Jawad"/>
      <button onClick={()=>alert("events")}>New</button>
      <button onClick={()=>alert("hello next js")}>Click me</button>
      <button onClick={()=>favouriteFruit("apple")}>Favourite Fruit</button>

    </main>
  )
}

const User=(props)=>{
  return(
    <main>
    Hello Mr/Mrs {props.name}
    </main>
  )
}
