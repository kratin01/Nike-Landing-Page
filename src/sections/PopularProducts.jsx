import { products } from "../constants/index.js";
import { PopularProductCard } from "../components/index.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const PopularProducts = () => {
  return (
    <section id="Products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        
        <h2 className="text-4xl font-palanquin font-bold dark:text-[#ECEEFF]">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
