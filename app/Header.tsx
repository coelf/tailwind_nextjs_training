import React from 'react'
import Link from "next/link"

function Header() {
    return (
        <header className='p-5 m-5 bg-gray-300 text-2xl flex flex-row shadow-xl rounded-3xl'>
            <Link href="/" className='menu-nav'>Home</Link>
            <Link href="/todos" className='menu-nav'>Todos</Link>
            <Link href="/search" className='menu-nav'>Search</Link>
            <Link href="/subscribe" className='menu-nav'>Email Subscribe</Link>
            <Link href="/pricing_card" className='menu-nav'>Pricing Card</Link>
            <Link href="/product_modal" className='menu-nav'>Product Modal</Link>
            <Link href="/image_gallery" className='menu-nav'>Gallery</Link>
            <Link href="/login" className='menu-nav'>Login</Link>
        </header>
    )
}

export default Header