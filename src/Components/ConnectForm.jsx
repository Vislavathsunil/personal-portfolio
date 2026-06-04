import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { FiSend } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import MyCV from "../assets/CV/MyCV.pdf";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function ConnectForm() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      setIsSending(true);

      await emailjs.send(
        "service_0jlnazo",
        "template_zq1acld",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "rbLde6NDZEcWcxx_Z"
      );

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <Toaster position="top-right" />

      {/* Background Blur Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Let's Connect
        </h2>
        {/* <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Have a project idea, internship opportunity, or want to
          collaborate? Feel free to reach out.
        </p> */}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-10"
      >
        {/* Left Section */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="
            rounded-3xl
            border border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
            shadow-[0_0_40px_rgba(34,211,238,0.08)]
          "
        >
          <h3 className="text-xl font-bold mb-5">
            Contact Information
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8 text-sm">
            I am currently looking for Frontend Developer and
            Software Engineer opportunities. Let's discuss your
            ideas and build something amazing together.
          </p>

          <div className="space-y-5">
            {/* Email */}
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:mrsunilpower@gmail.com"
              className="
                flex items-center gap-4
                px-4
                py-3
                rounded-2xl
                bg-white/5
                hover:bg-white/10
                transition-all
              "
            >
              <div className="p-2 rounded-xl bg-cyan-500/10">
                <MdEmail className="text-xl text-cyan-400" />
              </div>

              <div>
                {/* <h4 className="font-semibold">Email</h4> */}
                <p className="text-gray-400">
                  vsunilpower42@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+916303141055"
              className="
                flex items-center gap-4
                px-4
                py-3
                rounded-2xl
                bg-white/5
                hover:bg-white/10
                transition-all
              "
            >
              <div className="p-2 rounded-xl bg-cyan-500/10">
                <FaSquarePhone className="text-xl text-cyan-400" />
              </div>

              <div>
                {/* <h4 className="font-semibold">Phone</h4> */}
                <p className="text-gray-400">
                  +91 6303141055
                </p>
              </div>
            </motion.a>
          </div>

          {/* Resume Button */}
          <motion.a
            href={MyCV}
            download="Sunil_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-cyan-400
              px-8
              py-2
              font-semibold
              text-black
              shadow-lg
              hover:shadow-cyan-400/30
            "
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Form Section */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit(onSubmit)}
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            shadow-xl
          "
        >
          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="off"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-transparent
                  px-4
                  py-2
                  outline-none
                  transition-all
                  focus:border-cyan-400
                "
              />

              {errors.name && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                {...register("email", {
                  required: "Email is required",
                })}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-transparent
                  px-4
                  py-2
                  outline-none
                  transition-all
                  focus:border-cyan-400
                "
              />

              {errors.email && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mt-5">
            <textarea
              placeholder="Your Message"
              {...register("message", {
                required: "Message is required",
              })}
              className="
                w-full
                min-h-[180px]
                rounded-xl
                border
                border-white/20
                bg-transparent
                p-4
                outline-none
                transition-all
                focus:border-cyan-400
              "
            />

            {errors.message && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSending}
            type="submit"
            className="
              mt-6
              w-full
              rounded-xl
              bg-cyan-400
              py-2
              font-semibold
              text-black
              flex
              items-center
              justify-center
              gap-3
              hover:shadow-lg
              hover:shadow-cyan-400/30
              transition-all
            "
          >
            {isSending ? "Sending..." : "Send Message"}
            <FiSend />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default ConnectForm;