import React from "react";
import CountUp from "react-countup"; // countup
import { useInView } from "react-intersection-observer"; // intersection observer hook
import { motion } from "framer-motion"; // motion
import { fadeIn } from "../variants"; // local variants

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-center  "
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Us.</h2>

            <p className="mb-6">
              "At the heart of [Your Company Name], we are driven by a
              commitment to deliver unparalleled software solutions. Our team of
              brilliant minds, seasoned developers, and tech enthusiasts
              collaborates seamlessly to craft software that transcends
              expectations. "
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> experience
                </div>
              </div>
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={8} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> completed
                </div>
              </div>
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={45} duration={8} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Clients <br /> satisfied
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="/" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
