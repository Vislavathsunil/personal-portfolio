// import { PROJECTS } from "../constants/index";
// import { motion } from "framer-motion";

// function Projects() {
//   return (
//     <section className="pt-10" id="projects">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="mb-12 text-center text-2xl lg:text-3xl font-bold"
//       >
//         Projects
//       </motion.h1>

//       {/* Grid */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {PROJECTS.map((ele) => (
//           <motion.div
//             key={ele.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.02 }}
//             className="bg-black/40 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 text-white"
//           >
//             {/* Image */}
//             <img
//               src={ele.image}
//               alt={ele.name}
//               className="rounded-xl w-full h-48 object-fill mb-4"
//             />

//             {/* Title */}
//             <h2 className="text-xl font-semibold text-center">{ele.name}</h2>

//             {/* Description */}
//             <p className="text-sm  text-center mt-4 mb-4 px-2">
//               {ele.description}
//             </p>

//             {/* Button */}
//             <a
//               href={ele.githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border border-black text-black px-5 py-2 rounded-full text-sm bg-gray-100 transition"
//             >
//               Live Link
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;




import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

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
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-14 text-center text-2xl md:text-3xl lg:text-3xl font-bold text-white"
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
      >
        {PROJECTS.map((ele) => (
          <motion.div
            key={ele.id}
            variants={cardVariants}
            whileHover={{
              y: -12,
              transition: { duration: 0.3 },
            }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg shadow-xl"
          >
            {/* Image */}
            <div className="overflow-hidden p-2">
              <motion.img
                src={ele.image}
                alt={ele.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl w-full h-48 object-fill mb-4"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-6">
              <h2 className="text-base md:text-lg font-bold text-white mb-3">
                {ele.name}
              </h2>

              <p className="text-gray-300 text-sm md:text-md leading-relaxed flex-grow">
                {ele.description}
              </p>

              {/* Button */}
              <motion.a
                href={ele.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                View Project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;