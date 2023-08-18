'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function layout({ children }) {
  let pathname = usePathname()
  return (
    <div>
      {pathname !== '/login/loginteacher' ?

        <ul>
          <Link href="/login"><li>Home</li></Link>
          <Link href="/login/loginteacher"><li>Login(as Teacher)</li></Link>
          <Link href='/login/loginstudent'><li>Login(as Student)</li></Link>

        </ul> : <Link href='/login'>Go to login</Link>

      }

      {children}
    </div>
  )
}
