import React from 'react'
import { EXPERIENCES } from '../constants/index'

// motion framer
import { motion } from "framer-motion";
import { SlCalender } from 'react-icons/sl';
import { FaBuilding, FaBriefcase } from "react-icons/fa";

function Exprience() {
    return (
        <section id='work' className='pt-5'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='mb-8 pt-4 text-3xl text-center lg:text-4xl font-bold'
            >
                Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='flex flex-col justify-center gap-12 px-6 py-8 rounded-lg'
            >
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className='flex flex-col gap-2 border border-stone-50/20 hover:border-stone-100/40 transition-all duration-300 bg-stone-50/10 backdrop-blur-md px-6 py-5 rounded-xl shadow-md'
                    >
                        <div className="flex items-center gap-2 text-xl font-semibold text-white">
                            <FaBriefcase className="text-yellow-400" />
                            {experience.title}
                        </div>
                        <div className="flex items-center gap-2 text-lg text-stone-300">
                            <FaBuilding className="text-sky-400" />
                            {experience.company}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-stone-400 italic">
                            <SlCalender className="text-pink-400" />
                            {experience.duration}
                        </div>
                        <p className="mt-2 text-stone-200">{experience.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Exprience