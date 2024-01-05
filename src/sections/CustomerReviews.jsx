import { ReviewCard } from "../components/index.js";
import { reviews } from "../constants/index.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      
      className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
