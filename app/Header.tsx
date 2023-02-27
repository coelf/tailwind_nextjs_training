import React from 'react'
import Link from "next/link"

function Header() {
    return (
        <header className='p-5 m-5 bg-gray-400 text-2xl flex shadow-xl rounded-3xl'>
            <Link href="/" className='p-2'>Home</Link>
            <Link href="/todos" className='p-2'>Todos</Link>
            <Link href="/search" className='p-2'>Search</Link>
            <Link href="/subscribe" className='p-2'>Email Subscribe</Link>
            <Link href="/pricing_card" className='p-2'>Pricing Card</Link>
        </header>
    )
}

export default Header