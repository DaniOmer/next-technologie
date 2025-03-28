import { motion } from "framer-motion";
import ExpertiseItem from "./ExpertiseItem";

import DevelopmentImage from "../assets/development.jpg";
import NetworkImage from "../assets/network.jpg";
import IoTImage from "../assets/iot.jpg";

function OurExpertises() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <motion.div
        className="flex flex-col md:flex-row md:justify-between md:items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-gray-800">
          Nos expertises
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-md mt-4 md:mt-0">
          Chez IW Studio, nous proposons une gamme complète{" "}
          <br className="hidden md:block" /> de services pour répondre à vos
          besoins technologiques.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-rows-1 grid-cols-1 md:grid-rows-4 md:grid-cols-3 gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="md:row-span-3" variants={itemVariants}>
          <ExpertiseItem
            image={NetworkImage}
            title="Système & Réseau"
            description="Solutions réseau et infrastructure sur mesure pour optimiser votre infrastructure IT."
          />
        </motion.div>
        <motion.div className="md:row-span-4" variants={itemVariants}>
          <ExpertiseItem
            image={DevelopmentImage}
            title="Development"
            description="Développement d'applications web et mobiles modernes et performantes."
          />
        </motion.div>
        <motion.div
          className="md:row-span-3 md:row-start-2 md:col-start-3"
          variants={itemVariants}
        >
          <ExpertiseItem
            image={IoTImage}
            title="Internet des objets"
            description="Solutions IoT innovantes pour connecter et automatiser vos systèmes."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurExpertises;
