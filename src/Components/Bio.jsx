import React from 'react'

import { BIO } from "../constants/index"

// motion framer
import { motion } from "framer-motion";
import man from "../assets/man.png";

function Bio() {
    return (
        <section id="bio" className='pt-20  max-w-4xl flex flex-col gap-5 ' >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=' mb-6 text-center text-3xl lg:text-4xl font-bold'  >About Me</motion.h2>


            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto ">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={man}
                        alt="profile"
                        className="w-2/3 md:w-full max-w-sm object-contain"
                    />
                </div>

                {/* Bio Text Section */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {BIO.map((ele, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.5 }}
                            className="mb-4 text-lg lg:text-xl"
                        >
                            {ele}
                        </motion.p>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}

export default Bio