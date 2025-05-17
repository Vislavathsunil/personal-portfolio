import React, { useState } from 'react'

import { NAVIGATION_LINKS } from "../constants/index"
import logo from '../assets/logo.png'
import { GiButtonFinger } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';


function NavBar() {
    const [isMobile, setIsMobile] = useState(false);

    function handleMobile() {
        setIsMobile(!isMobile);
    }

    function handleLogo() {
        setIsMobile(false);
    }


    function handleClick(e, href) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = -85;
            const elementPosition = element.getBoundingClientRect().top;
            const offSetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offSetPosition,
                behavior: 'smooth'
            })
            setIsMobile(false);
        }
    }


    return (
        <div>
            <nav className="fixed top-4 right-0 left-0 mb-4 z-50" >
                {/* desktop navigatiion */}

                <div className="mx-auto hidden  max-w-2xl sm:flex justify-center items-center rounded-lg border border-gray-50/30  bg-black/20  backdrop-blur-lg py-3" >
                    {/* contains logo and navigation links */}
                    <div className="flex justify-between items-center gap-5 " >

                        {/* logo div */}
                        <div>
                            <a href="#" className="cursor-pointer" rel="noopener noreferrer" oncClick={handleLogo} >
                                {/* <img src={logo} alt="Brand logo" width={150} height={150} /> */}
                            </a>
                        </div>

                        {/* navigation links */}

                        <div>
                            <ul className="flex justify-center items-center gap-4">
                                {NAVIGATION_LINKS.map((ele, index) => (
                                    <li key={index} className="text-sm hover:text-cyan-300 cursor-pointer" > <a href={ele.href} onClick={(e) => handleClick(e, ele.href)} >{ele.label}</a> </li>

                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                {/* mobile navigation links */}
                <div className="sm:hidden backdrop-blur-md rounded-lg" >
                    <div className="flex items-center justify-between px-4 "   >
                        {/* logo div */}
                        <div className="flex items-center lg:hidden pt-1" >
                            <a href="#" onClick={handleLogo} >
                                {/* <img src={logo} alt="Brand logo" width={150} height={150} /> */}
                            </a>
                        </div>

                        {/* show equal to and cross icon */}
                        <div className="flex items-center lg:hidden" >
                            <button className="w-8 h-8" onClick={handleMobile}>  {!isMobile ? <FaBars className="w-8 h-8" /> : <FaTimes className="w-8 h-8" />}
                            </button>
                        </div>

                    </div>

                    {/* links div */}
                    <div className="mt-4 pb-2" >
                        {
                            isMobile &&
                            <ul className="flex flex-col items-center gap-2 " >
                                {NAVIGATION_LINKS.map((ele, index) => (
                                    <li key={index} className="text-base hover:text-cyan-300 cursor-pointer" onClick={handleMobile} ><a href={ele.href} onClick={(e) => handleClick(e, ele.href)}>{ele.label}</a></li>
                                ))}
                            </ul>}
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default NavBar