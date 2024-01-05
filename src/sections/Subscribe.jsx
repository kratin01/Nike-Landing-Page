import { Button } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Subscribe = () => {
  return (
    <motion.section
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      id="Contact Us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold dark:text-[#ECEEFF]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full dark:border-[#ECEEFF]">
        <input type="text" placeholder="subscribe@nike.com" className="input rounded-md dark:bg-black"  />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
