import React from 'react'
import { SKILLS } from "../constants/index"

import { MySkills } from '../constants/index';

// motion framer
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa6';

const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.5 } },

}

const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },

}




function NewSkills() {
    return (
        <section id="skills" className='container mx-auto py-10' >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=' text-center text-3xl mb-8 lg:text-4xl font-bold' >Skills</motion.h2>

            {/* All skill div */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariant}
                viewport={{ once: true }}

                className='flex flex-col justify-center gap-5 py-8 px-4  border border-stone-50/30 rounded-xl lg:px-10' >

                {MySkills.map((ele, index) => (
                    <motion.div key={index} className={`flex flex-col flex-wrap gap-6 pb-8 max-sm:text-center ${index === MySkills.length - 1 ? "" : "border-b border-stone-50/30"}`}>
                        <h2 className="text-2xl font-semibold">{ele.title}</h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}


                            className="flex flex-wrap items-center  gap-4 px-14">
                            {ele.Icons.map((iconEle, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.25 }}
                                    key={i}
                                    className=" p-4 flex flex-col items-center gap-2 rounded-lg w-full  md:w-auto bg-black/30  backdrop-blur-lg "
                                >
                                    {iconEle.icon}
                                    <p>{iconEle.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}

            </motion.div>





        </section>
    )
}

export default NewSkills;