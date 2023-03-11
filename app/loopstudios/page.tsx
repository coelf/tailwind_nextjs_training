import Image from 'next/image'
import React from 'react'


import icon_facebook from "./images/icon-facebook.svg"
import icon_instagram from "./images/icon-instagram.svg"
import icon_pinterest from "./images/icon-pinterest.svg"
import icon_twitter from "./images/icon-twitter.svg"

import logo from "./images/logo.svg"

import image_interactive from "./images/desktop/image-interactive.jpg"

import image_deep_earth_desktop from "./images/desktop/image-deep-earth.jpg"
import image_deep_earth_mobile from "./images/mobile/image-deep-earth.jpg"
import image_night_arcade_desktop from "./images/desktop/image-night-arcade.jpg"
import image_night_arcade_mobile from "./images/mobile/image-night-arcade.jpg"
import image_soccer_team_desktop from "./images/desktop/image-soccer-team.jpg"
import image_soccer_team_mobile from "./images/mobile/image-soccer-team.jpg"
import image_grid_desktop from "./images/desktop/image-grid.jpg"
import image_grid_mobile from "./images/mobile/image-grid.jpg"
import image_from_above_desktop from "./images/desktop/image-from-above.jpg"
import image_from_above_mobile from "./images/mobile/image-from-above.jpg"
import image_pocket_borealis_desktop from "./images/desktop/image-pocket-borealis.jpg"
import image_pocket_borealis_mobile from "./images/mobile/image-pocket-borealis.jpg"
import image_curiosity_desktop from "./images/desktop/image-curiosity.jpg"
import image_curiosity_mobile from "./images/mobile/image-curiosity.jpg"
import image_fisheye_desktop from "./images/desktop/image-fisheye.jpg"
import image_fisheye_mobile from "./images/mobile/image-fisheye.jpg"
import HamburgerMenu from './hamburgermenu'



"images/desktop/image-soccer-team.jpg"
"images/desktop/image-grid.jpg"

function loopstudiosPage() {
    return (
        <div>
            <section id="hero">
                <div className="container max-w-6xl mx-auto px-6 py-12">
                    {/* Menu/Logo container  */}
                    <nav className="flex items-center justify-between font-bold text-white">
                        {/* logo */}
                        <Image src={logo} alt="logo"></Image>
                        {/* menu */}

                        <div className="hidden h-10 md:flex md:space-x-8">
                            {["About", "Careers", "Events", "Products", "Support"]
                                .map((text) => (
                                    <div className="group">
                                        <a href="#">{text}</a>

                                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                    </div>))}
                        </div>
                        {/* Hamburder button */}
                        <HamburgerMenu />
                        <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
                            {["About", "Careers", "Events", "Products", "Support"].map((text) => (
                                <a href="#" className="hover:text-pink-500">{text}</a>
                            ))}

                        </div>
                    </nav>
                    {/* @todo  Mobile Menu */}

                    <div className="max-w-lg mt-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
                        Impressive Experiences That Deliver

                    </div>

                </div>
            </section>
            {/* Feature section */}
            <section id="feature">
                {/* Feature container */}
                <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
                    <Image src={image_interactive} alt="interactive"></Image>
                    {/* Text Container  */}
                    <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-10  md:pl-20"
                    >
                        <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                            The leader in interactive VR
                        </h2>

                        <p className='p-4 text-center md:text-left max-w-md '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </p>
                    </div>
                </div>
            </section>
            {/* Creations Section */}
            <section id="creations">
                <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                    {/* creation header */}
                    <div className="flex justify-center mb-20 md:justify-between">
                        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                            Our Creations
                        </h2>

                        <button className="hidden btn md:block">See All
                        </button>
                        {/* Items Container */}

                    </div>

                    <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:grid md:grid-cols-4 md:gap-6 md:space-y-0 ">
                        {
                            [
                                {
                                    itemText: "Deep Earth",
                                    desktopImage: image_deep_earth_desktop,
                                    mobileImage: image_deep_earth_mobile
                                },
                                {
                                    itemText: "Night Arcade",
                                    desktopImage: image_night_arcade_desktop,
                                    mobileImage: image_night_arcade_mobile,
                                },
                                {
                                    itemText: "Soccer Team VR",
                                    desktopImage: image_soccer_team_desktop,
                                    mobileImage: image_soccer_team_mobile,
                                },
                                {
                                    itemText: "The Grid",
                                    desktopImage: image_grid_desktop,
                                    mobileImage: image_grid_mobile,
                                },
                                {
                                    itemText: "From Up Above VR",
                                    desktopImage: image_from_above_desktop,
                                    mobileImage: image_from_above_mobile
                                },
                                {
                                    itemText: "Pocket Borealis",
                                    desktopImage: image_pocket_borealis_desktop,
                                    mobileImage: image_pocket_borealis_mobile,
                                },
                                {
                                    itemText: "The Curiosity",
                                    desktopImage: image_curiosity_desktop,
                                    mobileImage: image_curiosity_mobile,
                                },
                                {
                                    itemText: "Make It Fisheye",
                                    desktopImage: image_fisheye_desktop,
                                    mobileImage: image_fisheye_mobile,
                                }
                            ].map(({ itemText, desktopImage, mobileImage }) => (
                                <div className="group relative overflow-hidden ">
                                    {/* Desktop Image */}
                                    <Image
                                        src={desktopImage}
                                        alt=""
                                        className="hidden w-full duration-200 md:block group-hover:scale-110"
                                    />
                                    {/* Mobile Image  */}
                                    <Image
                                        src={mobileImage}
                                        alt=""
                                        className="w-full md:hidden"
                                    />

                                    {/* Item Gradient  */}
                                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                                    {/* Item Text */}
                                    <h5 className='absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black'>{itemText}</h5>

                                </div>
                            ))
                        }
                    </div>
                    {/* Bottom Button Container */}
                    <div className="flex justify-center mt-10 md:hidden">
                        <button className="btn w-full md:hidden">See All</button>
                    </div>
                </div>
            </section>

            <footer className='bg-black '>
                <div className="container max-w-6xl py-10 mx-auto">
                    {/* Footer Flex Container */}
                    <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                        {/* Menu & logo Container */}
                        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">

                            <div className="h-8">
                                <Image src={logo} alt="logo" className="w-44 md:ml-3"></Image>
                            </div>

                            <div className="flex flex-col items-center space-y-4  text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                                {["About", "Careers", "Events", "Products", "Support"]
                                    .map((text) => (
                                        <div className="group">
                                            <a href="#">{text}</a>

                                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                        </div>))}
                            </div>
                        </div>
                        {/* Social & Copy */}
                        <div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>

                            {/* icons Container  */}
                            <div
                                className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0"
                            >
                                {[
                                    icon_facebook,
                                    icon_instagram,
                                    icon_pinterest,
                                    icon_twitter
                                ].map((logo) =>
                                    <div className="h-8 group">
                                        <a href="#">
                                            <Image src={logo} alt="" className="h-6" />
                                        </a>
                                    </div>)
                                }
                            </div>

                            {/* Copy */}
                            <div className="font-thin   ">
                                &copy; 2022 Loopstudios. All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>

            </footer >
        </div >
    )
}

export default loopstudiosPage

