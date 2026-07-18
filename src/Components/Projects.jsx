import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Background Glow */}
      <div className="absolute right-1/4 top-1/3 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute left-1/4 bottom-1/3 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((ele) => (
          <motion.div
            key={ele.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
          >
            <div>
              {/* Image with Aspect Video and zoom hover */}
              <div className="relative aspect-video w-full overflow-hidden p-2">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-950">
                  <motion.img
                    src={ele.image}
                    alt={ele.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                      Explore Live Demo <FiExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {ele.name}
                </h3>

                {/* Tags */}
                {ele.tags && (
                  <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    {ele.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-4">
                  {ele.description}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="px-6 pb-6 pt-2">
              <motion.a
                href={ele.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black py-3 text-sm font-semibold transition-all duration-300"
              >
                View Project <FiExternalLink size={14} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;