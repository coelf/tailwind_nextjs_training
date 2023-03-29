import React from 'react'
import Image from 'next/image'
import logo from "./images/logo.svg"
import illustration_working from "./images/illustration-working.svg"

function shortly() {
    return (
        <div className='bg-gray-50'>
            {/* nav container */}
            <nav className="relative container mx-auto p-6">
                {/* Flex container for All Items */}
                <div className="flex items-center justify-between">
                    {/* Flex container for Logo/menu */}

                    <div className="flex items-center space-x-20">
                        {/*  */}
                        <Image src={logo} alt=""></Image>
                        {/* left menu */}
                        <div className="hidden space-x-8 font-bold lg:flex">
                            {
                                ["Features", "Pricing", "Resources"].map((text) => (
                                    <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>{text}</a>
                                ))}
                        </div>
                    </div>
                    {/* Right Buttons Menu */}
                    <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                        <div className="text-grayishViolet">Login</div>
                        <a href="#" className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>Sign up</a>
                    </div>
                    {/* @todo hamburger menu */}
                </div>

                {/* mobile menu */}
            </nav>
            {/* hero section */}
            <section id="hero">
                {/* hero container */}
                <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
                    {/* content container */}
                    <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52 ">
                        <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                            More than just shorter links
                        </h1>
                        <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                            Build your brand's recognition and get detailed insights on how your links are performing.
                        </p>
                        <div className="mx-auto lg:mx-0">
                            <a href="#" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full hover:opacity-70">Get Started</a>
                        </div>


                    </div>
                    {/* image */}
                    <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                        <Image src={illustration_working} alt="illustration_working" />
                    </div>
                </div>
            </section>
            {/* shorten section */}
            <section id="shorten" className='relative bg-gray-100'>
                {/* shorten container */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* form */}
                    <form id="link-form" className="relative flex flex-col w-full p-10 mt-20
                    space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3
                    ">
                        <input type="text" className="flex-1 border-2 rounded-lg placeholder-yellow-500 focus:outline-none" placeholder='shorten a link here ' id="link-input" />
                        <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">Shorten it</button>
                    </form>
                    {/* link  */}

                    {
                        [
                            { url: "https://frontendmentor.io", short: "https://rel.ink/k4IKyk" },
                            { url: "https://twitter.com/frontendmentor", short: "https://rel.ink/gxOXp9" },
                            { url: "https://linkedin.com/frontend-mentor", short: "https://rel.ink/gob3X9" }


                        ].map(({ url, short }) => (
                            <div
                                className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
                            >
                                <p className="font-bold text-center text-veryDarkViolet md:text-left">
                                    {url}
                                </p>

                                <div
                                    className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
                                >
                                    <div className="font-bold text-cyan">{short}</div>
                                    <button
                                        className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none"
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </div>
    )
}

export default shortly