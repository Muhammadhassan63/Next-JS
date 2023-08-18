'use client'
import React from 'react'
import Link from 'next/link'

export default function Notfound() {
  return (
    <div>

        <h1>This page is not available</h1>
        <Link href='/login'>click to go back</Link>
      
    </div>
  )
}
