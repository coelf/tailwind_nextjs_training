import React from 'react'
import Card from './card'

function PricingCard() {
    return (
        <>
            {/* Global Container*/}
            <div className="flex items-center justify-center min-h-screen bg-slate-800" >
                <div className='flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0' >
                    <Card type={"Basic"}
                        storage={100}
                        price={1.99}
                        features={"100 GB of storage,Option to add members,Extra member benefits"} />
                    <Card type={"Standard"}
                        storage={200}
                        price={3.99}
                        features={"200 GB of storage,Option to add members,Extra member benefits"} />
                    <Card type={"Premium"}
                        storage={2000}
                        price={8.99}
                        features={"2TB of storage,Option to add members,Extra member benefits"} />
                </div>
            </div>
        </>
    )
}

export default PricingCard