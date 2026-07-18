import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";
import { FaBuilding, FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="work" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Background Glow */}
      <div className="absolute left-1/3 top-1/2 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Work History
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Cards List */}
      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_10px_35px_rgba(6,182,212,0.08)]"
          >
            {/* Glowing Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Header Content */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Briefcase Icon Container */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 text-cyan-400 text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-slate-300 text-sm">
                    <FaBuilding size={14} className="text-purple-400" />
                    <span>{experience.company}</span>
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="flex-shrink-0 w-fit">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan-500/15 bg-cyan-500/5 text-cyan-400 text-xs font-semibold shadow-inner">
                  <SlCalender size={12} />
                  {experience.duration}
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className="h-[1px] bg-white/5 my-6"></div>

            {/* Description Points */}
            <ul className="space-y-3.5">
              {experience.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 text-slate-400 group-hover:text-slate-300 transition-colors duration-200"
                >
                  <span className="text-cyan-400 mt-1 select-none flex-shrink-0 text-sm">✦</span>
                  <span className="text-sm md:text-base font-light leading-relaxed">
                    {desc}
                  </span>
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