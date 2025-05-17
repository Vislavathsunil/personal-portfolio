import React from 'react'
import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from "../constants/index"

// react icons
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";


// motion framer
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className='mt-10  sm:px-6 py-8' >

            {/* <div className='flex justify-center items-center'>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={logo} alt="social media logo" width={200} className='my-10' />
            </div> */}
            {/* social media logo's with their links */}
            <div className=' w-full flex flex-wrap justify-center items-center gap-5 '>
                {
                    SOCIAL_MEDIA_LINKS.map((medias, index) => (
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: index * 0.2 }}
                            key={index} href={medias.href} target="_blank" rel="noopener noreferrer" className='h-12 w-12'  > {medias.icon} </motion.a>
                    ))
                }
            </div>

            {/* copyright div */}
            <div>
                <p className='text-center text-slate-400 text-sm     pt-4 ' >&copy;Sunil, All rights are reserved.</p>
            </div>
        </footer>
    )
}

export default Footer