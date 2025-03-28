import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

function ExpertiseItem({ image, title, description }) {
  return (
    <motion.div
      className="relative flex justify-between items-center rounded-3xl overflow-hidden w-full h-full group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <motion.h3
          className="text-2xl md:text-3xl font-medium text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-white/80 text-sm md:text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/our-expertises"
            className="inline-flex items-center gap-2 text-white bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-primary/30 transition-colors duration-300"
          >
            <span>En savoir plus</span>
            <RiArrowRightUpLine className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExpertiseItem;
