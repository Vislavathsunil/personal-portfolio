import React from "react";
import { motion } from "framer-motion";
import { MySkills } from "../constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function NewSkills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-5 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-3xl font-bold mb-16"
      >
        Tech Stack
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-16">
        {MySkills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Title */}
            <h3 className="text-lg font-semibold mb-8 text-center md:text-left">
              {skillGroup.title}
            </h3>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                xl:grid-cols-6
                gap-5
              "
            >
              {skillGroup.Icons.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-lg
                    p-5
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    transition-all
                    duration-300
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-cyan-500/0
                      via-cyan-500/10
                      to-purple-500/10
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.2,
                    }}
                    className="text-lg relative z-10"
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Name */}
                  <p className="text-sm md:text-sm text-center relative z-10">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default NewSkills;