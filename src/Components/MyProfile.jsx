import React from "react";

import { HERO } from "../constants/index.jsx"
import { motion } from "framer-motion";

// importing images
import carl from "../assets/carl.jpeg"
import sunil from "../assets/sunil.jpg"

// typed animation
import { ReactTyped } from "react-typed";


function MyProfile() {
    return (
        <section id="about" className="flex flex-col gap-4 lg:flex-row min-h-screen md:min-h-[70vh]  lg:min-h-screen justify-between items-center  mt-24 sm:mt-36 lg:mt-16"

        >
            {/* name and greeting div */}

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2  " >

                <h2 className="text-lg px-2  font-semibold"
                    style={{ marginTop: window.innerWidth <= 400 ? '16px' : '' }}
                > {HERO.greet}</h2>
                <h1 className="p-2 text-4xl md:text-5xl font-bold tracking-wide "  >{HERO.name}</h1>
                <h2 className="mb-1 text-2xl p-2 text-cyan-400 font-semibold">
                    <ReactTyped strings={[`${HERO.role}`, "Web Developer"]} typeSpeed={40}
                        backSpeed={50}
                        loop />
                </h2>
                <p className="p-2 mb-2 text-xl  hover:font-extralight" >{HERO.description}</p>
            </motion.div>



            {/* profile image div */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2  " >
                <div className="flex justify-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        // whileHover={{}}
                        whileHover={{
                            y: -10,
                            transition: {
                                duration: 0.3,
                                yoyo: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        src={sunil} alt="Pofile image " className="rounded-3xl" width={350} heigth={350} />
                </div>
            </motion.div>
        </section>

    );
}

export default MyProfile;
