'use client'
export default function CustomButton({price}) {
  return (
    <div>
        <button onClick={()=>alert(price)}>View Price</button>
      
    </div>
  )
}
