import { useState } from "react";
import { motion } from "framer-motion";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

import HomepageImage from "../assets/homepage.jpg";
import OurSpecialties from "../components/OurSpecialties";
import OurExpertises from "../components/OurExpertises";
import OurApproach from "../components/OurApproach";
import OurWork from "../components/OurWork";
import ContactUs from "../components/ContactUs";
import ContactFormModal from "../components/ContactFormModal";
import ThreeBackground from "../components/ThreeBackground";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      <div className="mt-28 mb-10 lg:mt-32 relative z-10">
        {/* First section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl mx-auto">
          <motion.div
            className="flex flex-col lg:justify-center lg:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center items-center gap-1 px-3 py-1.5 border border-primary rounded-full w-fit text-xs self-start"
              whileHover={{ scale: 1.05 }}
            >
              <VscDebugBreakpointData />
              <span>Ingénierie technologique</span>
            </motion.div>
            <motion.h1
              className="text-3xl lg:text-5xl font-medium my-2 leading-10 lg:leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Des concepts audacieux qui repoussent les limites de la
              créativité.
            </motion.h1>
            <motion.p
              className="text-base lg:text-lg text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              De la conception au déploiement, nous donnons vie à des idées qui
              font la différence.
            </motion.p>
            <motion.div
              className="w-full mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="flex justify-between items-center border border-primary bg-primary text-white hover:bg-transparent hover:text-black rounded-full text-sm px-2.5 py-1.5 transition-all ease-in-out delay-75 group"
                onClick={() => setIsOpen(true)}
              >
                <span className="block">Nous contacter</span>
                <span className="block p-1.5 rounded-full bg-white text-black ml-2 group-hover:bg-primary group-hover:text-white group-hover:animate-pulse">
                  <IoIosArrowRoundForward />
                </span>
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full max-h-[450px] grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-rows-3 grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
              <motion.div
                className="md:row-span-2 flex flex-col justify-center items-center border border-primary rounded-3xl bg-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium lg:font-bold my-1 leading-10 lg:leading-tight text-primary">
                  60 +
                </h2>
                <p className="text-xs md:text-sm text-center p-2 h-[65px] md:h-fit">
                  Projets réalisés pour nos clients avec un taux de satisfaction
                  de 100%.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center bg-primary text-white rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl md:text-5xl font-medium lg:font-bold my-1 leading-10 lg:leading-tight">
                  50 +
                </h2>
                <p className="text-xs md:text-sm text-center p-2 h-[65px] md:h-fit">
                  Clients nous ont fait confiance pour leurs projets.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="rounded-3xl overflow-hidden h-full w-full row-start-1 md:row-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={HomepageImage}
                alt="homepage"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Second section */}
        <motion.div
          className="bg-gray-100/80 backdrop-blur-sm py-1 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-screen-xl mx-auto">
            <OurSpecialties />
          </div>
        </motion.div>

        {/* Third section */}
        <motion.div
          className="mt-8 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <OurExpertises />
        </motion.div>

        {/* Fourth section */}
        <motion.div
          className="mt-8 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <OurApproach />
        </motion.div>

        {/* Fifth section */}
        <motion.div
          className="mt-8 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <OurWork />
        </motion.div>

        {/* Sixth section */}
        <motion.div
          className="mt-8 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactUs setIsOpen={setIsOpen} />
        </motion.div>

        {/* Contact form modal */}
        <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Homepage;
