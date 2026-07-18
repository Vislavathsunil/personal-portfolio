import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";
import { FaUserGraduate } from "react-icons/fa6";

function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-5 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-3xl font-bold mb-16"
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        {/* <div className="absolute left-5 md:left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-500 to-purple-500 transform md:-translate-x-1/2"></div> */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-500 to-purple-500 transform -translate-x-1/2"></div>
        
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className={`relative mb-12 flex ${index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
              }`}
          >
            {/* Timeline Dot */}
            {/* <div className="absolute left-5 md:left-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10"></div> */}
<div className="hidden md:block absolute left-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10"></div>

            {/* Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="w-full sm:ml-14 md:ml-0 md:w-[45%] p-6 rounded-3xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-lg hover:shadow-cyan-500/20
              transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full
                  bg-gradient-to-r from-cyan-500 to-purple-500
                  flex items-center justify-center"
                >
                  <FaUserGraduate className="text-white sm:text-2xl" />
                </div>

                <div>
                  <h3 className=" text-sm sm:text-md font-bold text-white">
                    {education.degree}
                  </h3>

                  <p className="text-gray-300 text-sm">
                    {education.institution}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-cyan-400 mt-2">
                    <SlCalender />
                    {education.duration}
                  </p>
                </div>
              </div>

              {education.description && (
                <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                  {education.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;