
import Link from "next/link"
export default function page() {
  return (
    <div>

        <h3>Inside About page</h3>

        <Link href='/about/aboutcollege'>Go to About College</Link>
        <br />
        <Link href='/about/aboutstudent'>Go to About Student</Link>
        
      
    </div>
  )
}
