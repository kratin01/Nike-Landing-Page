import { star } from "../assets/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
    variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
    
    className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] object-cover ease-in-out duration-300 hover:rotate-6 hover:scale-125' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-[#ECEEFF]'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
