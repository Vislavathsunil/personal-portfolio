import React from "react";
import { motion } from "framer-motion";
import { Certificates_details } from "../constants/index";
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
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/2 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Certificates & Credentials
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Certificates_details.map((ele, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
          >
            <a
              href={ele.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full justify-between"
            >
              <div>
                {/* Certificate Image - contained & centered, no distortion */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950/60 p-4 flex items-center justify-center border-b border-white/5">
                  <motion.img
                    src={ele.image}
                    alt={ele.title}
                    className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-slate-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-1.5 shadow-lg">
                      Verify Credential <FiExternalLink size={12} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-md font-bold text-white leading-snug transition-colors duration-300 group-hover:text-purple-300">
                    {ele.title}
                  </h3>
                </div>
              </div>

              {/* Footer details */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5 mt-4">
                <span>{ele.duration}</span>
                <span className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-1">
                  View Credential <FiExternalLink size={12} />
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;
