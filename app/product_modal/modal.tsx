import React from 'react'

import headphone from "./images/headphone.png"
import image_weight from "./images/weight.png"
import image_heart from "./images/heart.png"
import Image from 'next/image'

function Modal() {
    return (
        <div className='flex flex-col p-6 m-3 space-y-10
         bg-white
         rounded-2xl
         shadow-2xl
         md:flex-row md:space-y-0 md:space-x-10
         md:m-0 md:p-16
         '>
            <div>
                <Image src={headphone} alt="headphone" className="mx-auto duration-200 w-60 hover:scale-105"></Image>
            </div>
            {/** content */}
            <div className="flex flex-col space-y-6 text-center md:text-left" >
                {/** label */}
                <div className="flex flex-col mb-4 space-y-3 ">
                    <div>
                        <div className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
                            Free Shipping
                        </div>
                    </div>

                </div>
                { /**title text-center md:text-left*/}
                <div className="max-w-sm text-2xl font-medium ">
                    Razer Kraken Kitty Edt Gaming Headset Quartz
                </div>
                { /**price */}
                <div className='flex flex-col mb-4 space-y-3'>
                    <p className='line-through'>
                        $799
                    </p>
                    <p className='text-5xl font-bold'>
                        $599
                    </p>
                    <p className='text-sm font-light text-gray-400'>
                        This offer is valid until April 3rd or as long as stock lasts!
                    </p>
                </div>


                {/**button group */}
                <div className='group'>
                    <button className='w-full bg-blue-700 text-white border-b-8 border-b-blue-700
                    rounded-lg
                    group-hover:border-t-8
                    group-hover:border-b-0
                    group-hover:border-b-blue-700
                    group-hover:bg-blue-700
                    group-hover:border-t-blue-700
                    group-hover:shadow-lg
                    '>
                        <div className='px-8 py-4 bg-blue-500 rounded-lg
                        duration-150
                        group-hover:bg-blue-700
                        '>
                            Add to cart
                        </div>
                    </button>
                </div>

                {/** stock */}
                <div className='flex items-center space-x-3 group'>
                    <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"> </div>
                    <div className='text-sm'>50+ pcs. in stock</div>
                </div>
                {/** bottom container */}
                <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
                    <button className='flex items-center justify-center py-3 px-5 space-x-3 
                    border-2 border-gray-300 rounded-lg shadow-sm
                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 duration-150
                    active:bg-gray-300 active:border-t-red-600'>
                        <Image src={image_weight} alt="" className='w-8' />
                        <span>Add to cart</span>
                    </button>
                    <button className='flex items-center justify-center py-3 px-5 space-x-3 
                    border-2 border-gray-300 rounded-lg shadow-sm
                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 duration-150'>
                        <Image src={image_heart} alt="" className='w-8' />
                        <span>Add to whishlist</span>
                    </button>

                </div>


            </div>

        </div>
    )
}

export default Modal