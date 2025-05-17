import React from 'react'
import { SKILLS } from "../constants/index"

// motion framer
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.5 } },

}

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },

}




function Skills() {
  return (
    <section id="skills" className='container mx-auto pt-10' >
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

        className='flex flex-col justify-center gap-5 pt-8 px-4  border border-stone-50/30 rounded-xl lg:px-20' >

        {
          SKILLS.map((ele, index) => (
            // each skill div
            <motion.div
              variants={itemVariant}
              key={index} className={`flex items-center justify-between  py-6  ${index === SKILLS.length - 1 ? "" : "border-b border-stone-50/30"}`}   >
              {/* logo and skill name div */}
              <div className='flex items-center gap-4' >
                {ele.icon}
                <p className='text-xl' >{ele.name}</p>
              </div>

              {/* experience div */}
              <div className='text-xl' >
                {ele.experience}
              </div>
            </motion.div>

          ))
        }

      </motion.div>

      <div  ></div>
    </section>
  )
}

export default Skills