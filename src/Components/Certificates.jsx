// import React from 'react'
// import { motion } from "framer-motion";
// import { Certificates_details } from "../constants/index"

// const Certificates = () => {
//     return (
//         <div id="certificates" className='pt-8'>
//             <div className="max-w-4xl  ">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="text-3xl font-bold text-center mb-8">Certificates</motion.h2>
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                 >

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//                         {
//                             Certificates_details.map((ele, index) => (
//                                 <div key={index} className="bg-black/40 shadow-md rounded-lg p-4 flex flex-col items-center ">
//                                     <a href={ele.link} target='_blank'>
//                                         <img
//                                             src={ele.image}
//                                             alt="React Developer Certification"
//                                             className="w-30 h-30  rounded-lg"
//                                         />
//                                     </a>
//                                     <div className='mt-4'>
//                                         <h3 className="text-md font-semibold text-white">{ele.title} </h3>
//                                         <p className="text-sm text-white">{ele.duration}</p>
//                                     </div>
//                                 </div>
//                             ))

//                         }
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default Certificates;


import React from "react";
import { motion } from "framer-motion";
import { Certificates_details } from "../constants/index";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-14 text-white"
      >
        Certificates
      </motion.h2>

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
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl"
          >
            <a
              href={ele.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* Certificate Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={ele.image}
                  alt={ele.title}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.5 }}
                  className=" rounded-lg w-full h-48 object-fill mb-4 p-3"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                  {ele.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4">
                  {ele.duration}
                </p>

                <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 group-hover:scale-105">
                  View Certificate →
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
