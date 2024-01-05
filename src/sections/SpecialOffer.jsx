import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {Button} from "../components/index";

const SpecialOffer = () => {
  return (
    <section  className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      
      
      
      className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </motion.div>
      <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      
      
      className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold dark:text-[#ECEEFF]'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
