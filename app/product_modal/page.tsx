import React from 'react'
import Modal from './modal'

function productModel() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100" >
            <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row">
                <Modal />
            </div>
        </div>
    )
}

export default productModel