import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section id="contact" className="py-10 lg:section  ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <div>
                <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wider">
                  Get in touch
                </h4>
                <h2 className="text-[42px] lg:text-[75px] leading-none mb-12 uppercase">
                  Lets work <br /> together!
                </h2>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 items-start border border-white/10 p-5 rounded-2xl sm:border-none"
          >
            <input
              className=" bg-transparent border-white/20 transition-all duration-400 border-b outline-none py-3 w-full focus:border-accent"
              type="text"
              placeholder="name *"
            />
            <input
              className=" bg-transparent border-white/20 transition-all duration-400 border-b outline-none py-3 w-full focus:border-accent"
              type="text"
              placeholder="email id *"
            />
            <textarea
              className=" bg-transparent resize-none mb-12 border-white/20 transition-all duration-400 border-b outline-none py-3 w-full focus:border-accent"
              placeholder="message"
            ></textarea>
            <button className="btn btn-sm">Send now</button>
          </motion.form>
        </div>
        <motion.footer
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="py-12 text-center"
        >
          <div>
            <p>Contact: support@techysolutions | Follow us: @TechySolutions</p>
          </div>
          <div>
            Built with ❤️ using [MERN Stack] Privacy Policy | Terms of Service
          </div>
          <p>
            v1.0.0 | © 2024 Techy Solutions. All rights reserved. <br />
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
