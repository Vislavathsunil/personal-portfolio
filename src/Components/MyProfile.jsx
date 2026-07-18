import React from "react";
import { HERO } from "../constants/index.jsx";
import { motion } from "framer-motion";
import sunil from "../assets/power.png";
import { ReactTyped } from "react-typed";

function MyProfile() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = -85;
      const elementPosition = element.getBoundingClientRect().top;
      const offSetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offSetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col gap-12 lg:flex-row min-h-screen lg:min-h-[85vh] justify-between items-center py-20 lg:py-10 max-w-7xl mx-auto w-full mt-10"
    >
      {/* Name and greeting div */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col justify-center text-left"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6 tracking-wide backdrop-blur-md w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Open to exciting opportunities
        </div>

        {/* Greeting & Name */}
        <span className="text-slate-400 font-medium tracking-wider uppercase text-xs sm:text-sm mb-2">
          {HERO.greet}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            {HERO.name}
          </span>
        </h1>

        {/* Typing Roles */}
        <h2 className="mb-6 text-lg sm:text-xl font-semibold text-cyan-400 tracking-wide h-8">
          <ReactTyped
            strings={[`${HERO.role}`, "Web Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-light mb-8">
          {HERO.description}
        </p>

        {/* Actions CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] active:scale-95"
          >
            Let's Connect
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] active:scale-95"
          >
            View Work
          </a>
        </div>
      </motion.div>

      {/* Profile Image Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
      >
        <div className="relative group">
          {/* Background Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>

          {/* Double Border Image Container */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 p-2 shadow-2xl">
            <motion.img
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              src={sunil}
              alt="Profile image"
              className="w-full max-w-[340px] md:max-w-[380px] h-auto object-cover rounded-3xl shadow-xl transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default MyProfile;
