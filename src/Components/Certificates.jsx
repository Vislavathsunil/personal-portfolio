import React from 'react'
import { motion } from "framer-motion";
import { Certificates_details } from "../constants/index"

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

                        {
                            Certificates_details.map((ele, index) => (
                                <div key={index} className="bg-black/40 shadow-md rounded-lg p-4 flex flex-col items-center ">
                                    <a href={ele.link} target='_blank'>
                                        <img
                                            src={ele.image}
                                            alt="React Developer Certification"
                                            className="w-30 h-30  rounded-lg"
                                        />
                                    </a>
                                    <div className='mt-4'>
                                        <h3 className="text-lg font-semibold text-white">{ele.title} </h3>
                                        <p className="text-sm text-white">{ele.duration}</p>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Certificates;
