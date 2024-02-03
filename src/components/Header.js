import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className=" bg-pink-300 py-8">
      <div className="container mx-auto my-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center justify-center"
          >
            <img className="w-[60px]" src={Logo} alt="logo" />
            <a href="/">
              <h1 className=" text-xl  text-pink-950 mt-2 mx-2">
                <span className="text-2xl font-semibold text-pink-950">
                  Techy Software
                </span>
              </h1>
            </a>
          </motion.div>
          {/* Logo end*/}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <button className="btn btn-sm">Enquiry</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
