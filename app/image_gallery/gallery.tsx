import React from 'react'

import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import image5 from "./images/image5.jpg"
import image6 from "./images/image6.jpg"
import bookmark from "./images/bookmark.svg"
import Image from 'next/image'






function Gallery() {
    return (
        <div className='bg-white p-6 m-3 space-y-10 shadow-xl rounded-3xl md:p-40'>

            {/* Menu Container*/}

            <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8">
                {["Vector", "Illustrations", "Images", "Icons"].map((text) => (
                    <div className='group'>
                        <a href="#">{text}</a>
                        <div className="mx-2-mt-2 duration-500 opacity-0 border-b-2 border-black group-hover:opacity-90"></div>
                    </div>
                ))}
            </div>

            {/** search container */}
            <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                {/** input and svg container */}
                <div className="flex justify-between border-b">
                    <input
                        type="text"
                        className="ml-6 border-none:md:w-80 placeholder:font-thin focus:outline-none"
                        placeholder='Search'
                    />
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 text-gray-300 duration-200 hover:scale-110"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>
                {/**upload button */}
                <button className='py-3 px-14 m-4 text-lg font-normal
                 text-white bg-black border border-black rounded-md shadow-2xl
                 hover:bg-white hover:text-black duration-200
                 '>
                    Upload
                </button>
            </div>

            {/** Gallery Container */}
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {/** image */}
                {[
                    { image: image1, title: "TextImage1", likes: 1 },
                    { image: image2, title: "TextImage2", likes: -11 },
                    { image: image3, title: "TextImage3", likes: 45 },
                    { image: image4, title: "TextImage4", likes: 1558 },
                    { image: image5, title: "TextImage5", likes: 15 },
                    { image: image6, title: "TextImage6", likes: 1454 },
                ]
                    .map(({ image, title, likes }) => (
                        <div className="relative group">
                            <Image src={image} className="w-72" alt={''} />
                            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                                <div className="flex justify-between w-full">
                                    <div className='font-normal'>
                                        <p className="text-sm">{title}</p>
                                        <p className="text-xs">{likes} likes</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Image src={bookmark} alt={'bookmark'} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Gallery