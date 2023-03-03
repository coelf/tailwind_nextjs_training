import React from 'react'
import Link from "next/link"
import { url } from 'inspector'

function Header() {
    return (
        <header className='p-5 m-5  text-2xl flex flex-row shadow-xl rounded-3xl'>

            <div className='flex flex-col md:flex-row md:space-y-0 md:space-x-4 md:justify-between'>
                {


                    [
                        { url: "/", title: "Home" },
                        { url: "/todos", title: "Todos" },
                        { url: "/search", title: "Search" },
                        { url: "/subscribe", title: "Email Subscribe" },
                        { url: "/pricing_card", title: "Pricing Card" },
                        { url: "/product_modal", title: "Product Modal" },
                        { url: "/image_gallery", title: "Gallery" },
                        { url: "/login", title: "Login" },
                        { url: "/clipboard", title: "ClipBoard" }
                    ]
                        .map(
                            ({ url, title }) => (
                                <div className='group'>

                                    <Link href={url}>{title}</Link>
                                    <div className="mx-2-mt-2 duration-300 opacity-0 border-b-2 border-black group-hover:opacity-90" ></div>
                                </div >
                            )
                        )
                }
            </div >
        </header >
    )
}

export default Header