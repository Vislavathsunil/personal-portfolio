import React from 'react'
import { EDUCATION } from '../constants/index'

// motion framer
import { motion } from "framer-motion";
import { SlCalender } from 'react-icons/sl';
import { FaUserGraduate } from 'react-icons/fa6';

function Education() {
    return (
        <section id='education' className='pt-8' >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=' mb-8 text-center text-3xl lg:text-4xl font-bold' >Education</motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-col justify-center gap-20  pt-4 px-6 '  >
                {
                    EDUCATION.map((education, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: index * 0.5 }}
                            key={index} className='flex flex-col gap-1 border border-stone-50/30 rounded-lg bg-stone-50/10 px-6 py-4 '>
                            
                            <div className='flex items-center gap-6 
                            '>
                                
                                <FaUserGraduate className='w-18 h-18 text-green-600' /> 
                                <div>
                                    <h3 className='text-xl font-semibold' >{education.degree}</h3>
                                    <p className='text-lg'>{education.institution}</p>
                                    <p className='text-sm text-stone-300 flex items-center gap-2'><SlCalender className='text-pink-600' />{education.duration}</p>
                                </div>
                            </div>
                            <p className='mt-3'>{education.description}</p>
                        </motion.div>
                    ))
                }
            </motion.div>

        </section>
    )
}

export default Education