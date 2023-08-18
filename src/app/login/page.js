'use client'
import { useRouter } from 'next/navigation'
export default function login() {
  const router=useRouter()
  const navigation=(name)=>{
    router.push(name)
  }
  return (
    <div>

        <h1>Inside Login</h1>
      <button onClick={()=>navigation('/login/loginstudent')}>Go to Login Student</button>
      <br /><br />
      <button onClick={()=>navigation('/login/loginstudent')}>Go to Login Teacher</button>
      
    </div>
  )
}
