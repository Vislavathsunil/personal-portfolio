import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="pt-10" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center text-3xl lg:text-4xl font-bold"
      >
        Projects
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((ele) => (
          <motion.div
            key={ele.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/40 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 text-white"
          >
            {/* Image */}
            <img
              src={ele.image}
              alt={ele.name}
              className="rounded-xl w-full h-48 object-fill mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-semibold text-center">{ele.name}</h2>

            {/* Description */}
            <p className="text-sm  text-center mt-4 mb-4 px-2">
              {ele.description}
            </p>

            {/* Button */}
            <a
              href={ele.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-5 py-2 rounded-full text-sm bg-gray-100 transition"
            >
              Live Link
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
