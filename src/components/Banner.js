import React from "react";
import { FaGithub, FaLinkedin, FaDribbble, FaYoutube } from "react-icons/fa";
import Image from "../assets/ai-bg.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      id="home"
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[55px] font-bold leading-[0.9] lg:text-[45px]"
            >
              <span>Pioneering Tech Solutions</span> <br />{" "}
              <span>for a Digital Future!</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="my-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  "Software Development",
                  2000,
                  "AI & Machine Learning",
                  2000,
                  "Cybersecurity",
                  2000,
                  "Web & App Development",
                  2000,
                  "Cloud Solutions",
                  2000,
                ]}
                speed={150}
                className="text-accent"
                repeat={Infinity}
                wrapper="span"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Ensure that you have the extension's commands available. You can
              check by opening the command palette (Ctrl+Shift+P or Cmd+Shift+P)
              and typing "Lorem" to see if related commands are available.
            </motion.p>
            {/* <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="/" className=" text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div> */}

            {/* social icons */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="/">
                <FaGithub />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[420px] lg:max-w-[580px] mx-auto mix-blend-lighten"
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
