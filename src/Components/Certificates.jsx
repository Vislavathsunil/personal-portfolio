import React from 'react'
import { motion } from "framer-motion";

const Certificates = () => {
    return (
        <div id="certificates" className='pt-8'>
            <div className="max-w-4xl  ">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center mb-8">Certificates</motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-black/40 shadow-md rounded-lg p-4 flex flex-col items-center ">
                            <a href="https://www.coursera.org/account/accomplishments/verify/MXJ3JF5KQ8Z8" target='_blank'>
                                <img
                                    src="src\assets\Cerificates\frontend.png"
                                    alt="React Developer Certification"
                                    className="w-30 h-30  rounded-lg"
                                />
                            </a>
                            <div className='mt-4'>
                                <h3 className="text-lg font-semibold text-white">Introduction to Web Development with HTML, CSS, JavaScript </h3>
                                <p className="text-sm text-white">Duration: January 2024 - May 2022</p>
                            </div>
                        </div>
                        <div className="bg-black/40 shadow-md rounded-lg p-4 flex flex-col items-center">
                            <a href="https://learn.mongodb.com/c/qA1Ad8vJTn2AO1a_UD27Qw" target='_blank'>
                                <img

                                    src="src\assets\Cerificates\mongodb.png"
                                    alt="JavaScript Mastery"
                                    className="w-30 h-30  rounded-lg"
                                />
                            </a>
                            <div className='mt-4 flex flex-col  items-start' >
                                <h3 className="text-lg font-semibold text-white">MongoDB and Document Mode </h3>
                                <p className="text-white text-sm">Duration: April 2024 - Jun 2024</p>
                            </div>
                        </div>
                        <div className="bg-black/40 shadow-md rounded-lg p-4 flex flex-col items-center">
                            <a href="https://coursera.org/verify/BGMTJNLPDJ2F" target='_blank'>
                                <img

                                    src="src\assets\Cerificates\dynamic.png"
                                    alt="JavaScript Mastery"
                                    className="w-30 h-30  rounded-lg"
                                />
                            </a>
                            <div className='mt-4 flex flex-col  items-start' >
                                <h3 className="text-lg font-semibold text-white"> Dynamic Programming, Greedy Algorithms </h3>
                                <p className="text-white text-sm">Duration: March 2024 - April 2024</p>
                            </div>
                        </div>
                        <div className="bg-black/40 shadow-md rounded-lg p-4 flex flex-col items-center">
                            <a href="https://coursera.org/verify/A42MQ3SUQ92S" target='_blank'>
                                <img

                                    src="src\assets\Cerificates\aproxim.png"
                                    alt="JavaScript Mastery"
                                    className="w-30 h-30  rounded-lg"
                                />
                            </a>
                            <div className='mt-4 flex flex-col  items-start' >
                                <h3 className="text-lg font-semibold text-white"> Approximation Algorithms </h3>
                                <p className="text-white text-sm">Duration: April 2024 - May 2024</p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Certificates;
