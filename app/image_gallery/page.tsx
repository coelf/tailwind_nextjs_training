import React from 'react'
import Gallery from './gallery'

function ImageGallery() {
    return (
        <>
            {/* Global Container*/}
            <div className="flex items-center justify-center min-h-screen bg-cyan-50" >
                <Gallery />
            </div>
        </>
    )
}

export default ImageGallery