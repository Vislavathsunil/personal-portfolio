import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";
import { FaBuilding, FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="work"
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-3xl font-bold mb-16"
      >
        Experience
      </motion.h2>

      <div className="grid gap-8 max-w-6xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              shadow-xl
              p-6 md:p-8
            "
          >
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              <div>
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-cyan-400 text-xl" />

                  <h3 className="text-lg md:text-xl font-bold">
                    {experience.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-300">
                  <FaBuilding className="text-purple-400" />
                  <p className="text-sm md:text-base">
                  {experience.company}

                  </p>
                </div>
              </div>

              <div className="flex items-center text-sm gap-2 text-cyan-400">
                <SlCalender />
                {experience.duration}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-5"></div>

            <ul className="space-y-3 textsm md:text-base">
              {experience.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-gray-300 text-sm md:text-md"
                >
                  <span className="text-cyan-400">✦</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;