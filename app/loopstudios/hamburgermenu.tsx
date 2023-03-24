'use client'
import React, { useEffect } from 'react'

function HamburgerMenu() {
    useEffect(() => {
        const navToggle = () => {
            btn?.classList.toggle("open");
            menu?.classList.toggle("flex");
            menu?.classList.toggle("hidden");
        };
        const menu = document.getElementById("menu");
        const btn = document.getElementById("menu-btn");

        btn?.addEventListener("click", navToggle);
        return () => btn?.removeEventListener("click", navToggle);
    }, []);
    return (


        <button
            id="menu-btn"
            type="button"
            className='z-40 block hamburger focus:outline-none' >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
        </button>

    )
}


export default HamburgerMenu