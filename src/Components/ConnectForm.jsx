import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import emailjs from "@emailjs/browser"
import { FiSend } from 'react-icons/fi';

// motion framer
import { motion } from "framer-motion";


// react icons
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

// my cv
import MyCV from "../assets/CV/MyCV.pdf"



function ConnectForm() {
    const [isSending, setIsSending] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function onSubmit(data) {
        const myData = {
            name: data.name,
            email: data.email,
            message: data.message,
        }

        emailjs.send(
            "service_0jlnazo",
            "template_zq1acld",
            myData,
            "rbLde6NDZEcWcxx_Z",
        ).then((response) => {
            toast.success("Message send successfully");
        }).catch((error) => {
            toString.error("Something error to send email..")
        })

        reset({
            name: "",
            email: "",
            message: "",
        })
    }


    return (
        <div id='contact' className=' pt-14 w-full px-6' >
            <Toaster />
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='mb-12 lg:mb-8 text-center text-3xl lg:text-4xl font-bold' >Let's Connect</motion.h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}

                className=" flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 ">
                {/* Contacts div */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className=' flex flex-col  gap-6  '>
                    <h3 className='text-2xl'>Contact Details</h3>
                    {/* contact email div */}
                    <div className='flex items-center gap-4' >
                        <MdEmail className='text-2xl cursor-pointer' />
                        <a href="mailto:mrsunilpower.com" className='cursor-pointer'>mrsunilpower@gmail.com</a>
                    </div>
                    {/* contact phone div */}
                    <div className='flex  items-center gap-4'>
                        <FaSquarePhone className='text-2xl cursor-pointer' />
                        <a href="callto: +91 6303141055" className="cursor-pointer">+91 6303141055</a>
                    </div>

                    <div className='pt:12 lg:pt-16'>
                        <button className=' outline-none px-10 py-4 text-lg sm:text-xl rounded-full text-black font-semibold bg-cyan-400 shadow-xl transition-shadow' > <a href={MyCV} download={"MyCv.pdf"} target='_blank'>Download Resume</a> </button>
                    </div>
                </motion.div>

                {/* Form Div */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}

                    action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col justify-center flex-wrap gap-4 py-8 '>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-4 '>
                            {/* name and email input div */}
                            <div className='flex flex-col gap-4  w-full' >
                                <input type="text" id="name" autoComplete='off' {...register('name', { required: { value: true, message: "Your name is required!" }, minLength: { value: 4, message: "Your name should be > 4" }, maxLength: { value: 15, message: "Your name should be < 15" } })} placeholder='Name' className='bg-transparent border border-stone-50 w-full h-10 pl-4 rounded-lg outline-none' />
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className='w-full text-red-500' >{errors.name && errors.name.message}</motion.p>
                            </div>
                            <div className='flex flex-col gap-4 pt-0 w-full'  >
                                <input type="email" id="email" formNoValidate autoComplete='off' {...register('email', { required: { value: true, message: "Your email is required!" }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter valid email..." } })} placeholder='Email' className='bg-transparent border border-stone-50 w-full h-10 pl-4 rounded-lg outline-none' />
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className='w-full text-red-500 '>{errors.email && errors.email.message}</motion.p>
                            </div>
                        </div>
                        {/* message div */}
                        <div className='' >
                            <textarea placeholder='Message'   {...register('message', { required: { value: true, message: "Please enter your message..." }, maxLength: { value: 100, message: " 100 > charcters " } })} className='bg-transparent border border-stone-50 w-full min-h-40 rounded-lg p-3 outline-none '></textarea>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className='text-red-500 pt-2' >{errors.message && errors.message.message}</motion.p>
                        </div>

                        <button type="submit" value="Send" className='border border-stone-50 w-full rounded-lg h-10 cursor-pointer bg-white' >
                            <div className='flex justify-center items-center gap-4 text-black font-bold text-xl' >{isSending ? "Sending..." : "Send"} <FiSend /></div>
                        </button>
                    </div>

                </motion.form>
            </motion.div>

        </div >
    )
}

export default ConnectForm