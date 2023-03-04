import React from 'react'
import Image from 'next/image'
import logo from "./images/logo.svg"
import imageComputer from "./images/image-computer.png"
import imageDevice from "./images/image-devices.png"

import iconblacklist from "./images/icon-blacklist.svg"
import icontext from "./images/icon-text.svg"
import iconpreview from "./images/icon-preview.svg"

import iconfacebook from "./images/icon-facebook.svg"
import iconinstagram from "./images/icon-instagram.svg"
import icontwitter from "./images/icon-twitter.svg"



import logoGoogle from "./images/logo-google.png"
import logoHp from "./images/logo-hp.png"
import logoIbm from "./images/logo-ibm.png"
import logoMicrosoft from "./images/logo-microsoft.png"
import logoVectorGraphics from "./images/logo-vector-graphics.png"



function ClipBardPage() {
    return (
        <div>
            <section id="hero">
                <div className="section-container justify-center my-40 pt-16">
                    <Image src={logo} alt="logo" className='mx-auto my-16'></Image>
                    <h3>A history of everything you copy</h3>
                    <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
                        Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices
                    </p>
                    <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
                        <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                            Download for iOS
                        </a>
                        <a href='#' className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'>
                            Download for Mac
                        </a>
                    </div>
                </div>
            </section>
            <section id="snippets">
                <div className="section-container my-10 md-4">
                    <h3>
                        Keep track of your snippets
                        Clipboard
                    </h3>
                </div>
                <p className='max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue'>
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                </p>

            </section>
            <section id="features">
                <div className="section-container my-20">
                    <div className="relative flex flex-col md:flex-row md:space-x-32">
                        {/* image */}
                        <div className='md:w-1/2'>
                            <Image src={imageComputer} alt="computer" className='md:absolute top-0 right-[50%]' />

                        </div>
                        {/* Items */}
                        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 text-center md:mb-60 md:text-left md:pl-16">
                            <div>
                                <h5 className='text-2xl font-bold text-darkGrayishBlue'>
                                    Quick Search
                                </h5>
                                <p className="text-grayishBlue">
                                    Easily search your snippets by content, category, web address, application, and more.
                                </p>
                            </div>
                            <div>
                                <h5 className='text-2xl font-bold text-darkGrayishBlue'>
                                    iCloud Sync
                                </h5>
                                <p className="text-grayishBlue">
                                    Instantly saves and syncs snippets across all your devices.
                                </p>
                            </div>
                            <div>
                                <h5 className='text-2xl font-bold text-darkGrayishBlue'>
                                    Completely History
                                </h5>
                                <p className="text-grayishBlue">
                                    Retrieve any snippets from the first moment you started using the app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Access">
                <div className='section-container my-20'>
                    <h3>Access Clipboard Anywhere</h3>
                    <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
                        Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.


                    </p>
                    <Image src={imageDevice} alt="computer" className='mx-auto' />
                </div>

            </section>
            <section id="SuperCharge">
                <div className='section-container my-20'>
                    <h3>Supercharge your workflow</h3>
                    <p className='max-w-3xl mx-auto mb-16 text-xl text-grayishBlue'>
                        We've got the tools to boost your productivity
                    </p>
                </div>
                {/* items container */}


                <div className="flex flex-col items-center justify-between space-y-16 
                md:flex-row md:space-y-0 md:space-x-12 text-center">
                    <div className='flex flex-col items-center space-y-5'>
                        <Image src={iconblacklist} alt="BlackList" className='mb-6' />
                        <h5 className='text-2xl font-bold text-darkGrayishBlue'>Create Blacklists </h5>
                        <p className="text-grayishBlue">
                            Easily search your snippets by content, category, web address, application, and more.
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                        <Image src={icontext} alt="text" className='mb-6' />
                        <h5 className='text-2xl font-bold text-darkGrayishBlue'>Plain Text Snippets</h5>
                        <p className="text-grayishBlue">
                            Remove unwanted formatting from copied text for a consistent look.
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                        <Image src={iconpreview} alt="Preview" className='mb-6' />
                        <h5 className='text-2xl font-bold text-darkGrayishBlue'>Sneak Preview </h5>
                        <p className="text-grayishBlue">
                            Quick preview of all snippets on your Clipboard for easy access.
                        </p>
                    </div>

                </div>
            </section>

            {/* References Section */}
            <section id="references">
                <div
                    className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
                >
                    <Image src={logoGoogle} alt="" />
                    <Image src={logoIbm} alt="" />
                    <Image src={logoMicrosoft} alt="" />
                    <Image src={logoHp} alt="" />
                    <Image src={logoVectorGraphics} alt="" />
                </div>
            </section>


            {/* Bottom CTA Section */}
            <section id="bottom">
                <div className="section-container my-20">
                    <h3>Clipboard for iOS and MacOS</h3>
                    <p className="section-content mb-10 text-xl text-grayishBlue">
                        Available for free on the App Store. Download for Mac or iOS, sync
                        with iCloud and you're ready to start adding to your clipboard.
                    </p>

                    {/* Button Container */}
                    <div className="button-container">
                        <a
                            href="#"
                            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
                        >
                            Download for iOS
                        </a>
                        <a
                            href="#"
                            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
                        >
                            Download for Mac
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-50">
                <div className="section-container">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        {/* Image */}
                        <Image src={logo} alt="" className="scale-50" />
                        {/* Container for Menus & Social */}
                        <div
                            className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue"
                        >
                            {/* Menus */}
                            <div
                                className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0"
                            >
                                {/* Menu 1 */}
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div><a href="#" className="hover:text-strongCyan">FAQs</a></div>
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">Contact Us</a>
                                    </div>
                                </div>
                                {/* Menu 2 */}
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">Privacy Policy</a>
                                    </div>
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">Press Kit</a>
                                    </div>
                                </div>
                                {/* Menu 3 */}
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">Install Guide</a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-between w-32 py-1">
                                <a href="#"
                                ><Image
                                        src={iconfacebook}
                                        alt=""
                                        className="duration-200 ficon"
                                    /></a>

                                <a href="#"
                                ><Image
                                        src={icontwitter}
                                        alt=""
                                        className="duration-200 ficon"
                                    /></a>

                                <a href="#"
                                ><Image
                                        src={iconinstagram}
                                        alt=""
                                        className="duration-200 ficon"
                                    /></a>


                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div >
    )
}

export default ClipBardPage