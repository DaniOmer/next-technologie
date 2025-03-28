import { VscDebugBreakpointData } from "react-icons/vsc";
import { motion } from "framer-motion";

function OurSpecialties() {
  const SPECIALITIES = [
    "Développement d'application web",
    "Développement d'application mobile",
    "Cloud Computing",
    "Réseaux et Infrastructures",
    "SEO et Marketing Digital",
    "Internet des Objets (IoT)",
  ];

  return (
    <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm py-6">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ul className="animate-infinite-scroll whitespace-nowrap flex gap-8">
          {[...SPECIALITIES, ...SPECIALITIES].map((speciality, index) => (
            <motion.li
              key={index + speciality}
              className="list-none flex justify-center items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-colors duration-300"
                whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.1)" }}
              >
                <VscDebugBreakpointData className="text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {speciality}
                </span>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default OurSpecialties;
