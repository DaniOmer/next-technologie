import { useState } from "react";
import { motion } from "framer-motion";

import TextGradient from "../components/TextGradient";
import ContactUs from "../components/ContactUs";
import ContactFormModal from "../components/ContactFormModal";

import Ecommerce1 from "../assets/ecommerce-1.webp";
import Ecommerce3 from "../assets/ecommerce-3.webp";
import SaasInvoice from "../assets/sass-invoice.webp";
import Customer1 from "../assets/customer-1.png";
import Customer2 from "../assets/customer-2.webp";
import Customer3 from "../assets/kiosk.webp";

function Work() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-28 mb-10 lg:mt-32">
      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-2/3 mx-auto md:text-center">
          <motion.h1
            className="text-3xl lg:text-5xl font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TextGradient text="Nos dernières réalisations" />
          </motion.h1>
          <motion.p
            className="text-sm md:text-base mt-2 lg:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chez IW Studio, chaque projet est une opportunité de repousser les
            limites de la créativité et de la performance. Découvrez comment
            nous avons aidé nos clients à concrétiser leurs ambitions grâce à
            des solutions sur mesure, innovantes et impactantes.
          </motion.p>
        </div>
      </motion.section>

      {/* Work */}
      <motion.section
        className="mt-8 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col min-h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <img
              src={Ecommerce1}
              alt="our-work-1"
              className="w-full object-cover mb-2"
            />
            <div className="h-[70px]">
              <h3>Site Ecommerce de vente de parfums</h3>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-black">Stack technique</span>{" "}
                : ReactJS, Symfony, PostgreSQL
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col min-h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <img
              src={Customer3}
              alt="our-work-3"
              className="w-full object-contain mb-2"
            />
            <div className="h-[70px]">
              <h3>Application native de type kiosk</h3>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-black">Stack technique</span>{" "}
                : React.js, Electron.js, Django, PostgreSQL
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col min-h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <img
              src={SaasInvoice}
              alt="our-work-2"
              className="w-full object-contain mb-2"
            />
            <div className="h-[70px]">
              <h3>Application Saas de gestion de facturation</h3>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-black">Stack technique</span>{" "}
                : Next.js, TypeScript, mongoDB, Tailwindcss
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col min-h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <img
              src={Customer1}
              alt="our-work-3"
              className="w-full object-contain mb-2"
            />
            <div className="h-[70px]">
              <h3>Site Vitrine avec système de réservation</h3>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-black">Stack technique</span>{" "}
                : Next.js, TailwindCss
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col min-h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <img
              src={Ecommerce3}
              alt="our-work-3"
              className="w-full object-cover mb-2"
            />
            <h3>Site Ecommerce de vente de mobiliers</h3>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-black">Stack technique</span> :
              Vue.js, fastAPI, PostgreSQL, Tailwindcss
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col min-h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <img
              src={Customer2}
              alt="our-work-3"
              className="w-full object-contain mb-2"
            />
            <div className="h-[70px]">
              <h3>Site Vitrine</h3>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-black">Stack technique</span>{" "}
                : Wordpress
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact us */}
      <motion.div
        className="mt-8 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactUs setIsOpen={setIsOpen} />
      </motion.div>

      {/* Modal Contact */}
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
export default Work;
