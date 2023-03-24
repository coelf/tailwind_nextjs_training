'use client'
import React, { useEffect } from 'react'

function MainMenu() {
    useEffect(() => {
        const navToggle = () => {
            btn?.classList.toggle("open");
            menu?.classList.toggle("flex");
            menu?.classList.toggle("hidden");
        };
        const menu = document.getElementById("main-menu");
        const btn = document.getElementById("main-menu-btn");

        btn?.addEventListener("click", navToggle);
        return () => btn?.removeEventListener("click", navToggle);
    }, []);
    return (


        <div className='relative top-0 left-0 h-0'>
            <button
                id="main-menu-btn"
                type="button"
                className='z-41 block main-hamburger focus:outline-none' >
                <span className='main-hamburger-top'></span>
                <span className='main-hamburger-middle'></span>
                <span className='main-hamburger-bottom'></span>
            </button>
        </div>

    )
}


export default MainMenu