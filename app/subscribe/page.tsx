import React from 'react'
import Image from 'next/image';
import image from "./images/image.jpg"

function Subscribe() {
    return (
        // background container
        <div className="flex items-center justify-center h-screen bg-zinc-600">
            {/* card */}
            <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
                {/*  Flex container*/}
                <div className="flex flex-col md:flex-row rounded-l-xl">

                    <Image
                        src={image}
                        alt="the image"
                        className=' object-cover
                         rounded-xl  
                         h-80
                         md:h-64 md:w-40 md:rounded-l-xl md:rounded-r-none
                         transform duration-200
                         hover:scale-110
                         hover:rounded-3xl hover:md:rounded-l-3xl
                         '
                    />


                    <div className="p-6 md:p-12">
                        <h2 className='font-serif text-xl font-medium text-center text-white md:text-left '>
                            Get diet and fitness tips in your inbox
                        </h2>
                        <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                            Eat better and exercice better. Sign up for the Diet&Fitness newsletter
                        </p>

                        <div className="flex flex-col mt-5 md:space-x-3 md:flex-row md:space-y-0">
                            <input
                                type="text"
                                placeholder='Enter your email address'
                                className='
                                p-2 px-4 text-center text-white bg-zinc-800
                                border border-zinc-600
                                placeholder:text-xs placeholder:text-center
                                md:text-left placeholder:md:text-left focus:outline-none
                                '
                            />
                            <button className='
                            mt-2 md:mt-0
                            p-2 -x-4
                            text-xs rounded-md
                             text-zinc-800
                             bg-lime-500
                             hover:text-white duration-500'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Subscribe