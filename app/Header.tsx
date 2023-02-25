import React from 'react'
import Link from "next/link"

function Header() {
    return (
        <header className='p-5 m-5 bg-gray-400 text-2xl flex shadow-xl rounded-3xl'>
            <Link href="/" className='p-2'>Home</Link>
            <Link href="/todos" className='p-2'>Todos</Link>
        </header>
    )
}

export default Header