import { useState } from "react";

import { VscDebugBreakpointData } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

import HomepageImage from "../assets/homepage.jpg";
import OurSpecialties from "../components/OurSpecialties";
import OurExpertises from "../components/OurExpertises";
import OurApproach from "../components/OurApproach";
import OurWork from "../components/OurWork";
import ContactUs from "../components/ContactUs";
import ContactFormModal from "../components/ContactFormModal";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-28 mb-10 lg:mt-32">
      {/* First section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:justify-center lg:items-center">
          <div className="flex justify-center items-center gap-1 px-3 py-1.5 border border-primary rounded-full w-fit text-xs self-start">
            <VscDebugBreakpointData />
            <span>Ingénierie technologique</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-medium my-2 leading-10 lg:leading-tight tracking-wide">
            Des concepts audacieux qui repoussent les limites de la créativité.
          </h1>
          <p className="text-base lg:text-lg text-gray-500">
            De la conception au déploiement, nous donnons vie à des idées qui
            font la différence.
          </p>
          <div className="w-full mt-4">
            <button
              className="flex justify-between items-center border border-primary bg-primary text-white hover:bg-transparent hover:text-black rounded-full text-sm px-2.5 py-1.5 transition-all ease-in-out delay-75 group"
              onClick={() => setIsOpen(true)}
            >
              <span className="block">Nous contacter</span>
              <span className="block p-1.5 rounded-full bg-white text-black ml-2 group-hover:bg-primary group-hover:text-white group-hover:animate-pulse">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full max-h-[450px] grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
          <div className="grid md:grid-rows-3 grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
            <div className="md:row-span-2 flex flex-col justify-center items-center border border-primary rounded-3xl">
              <h2 className="text-3xl md:text-7xl font-medium my-1 leading-10 lg:leading-tight text-primary">
                110 +
              </h2>
              <p className="text-xs md:text-sm text-center p-2">
                Projets réalisés pour nos clients avec un taux de satisfaction
                de 100%.{" "}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-primary text-white rounded-3xl">
              <h2 className="text-2xl md:text-5xl font-bold my-1 leading-10 lg:leading-tight">
                70 +
              </h2>
              <p className="text-xs md:text-sm text-center p-2">
                Clients nous ont fait confiance pour leurs projets.{" "}
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden h-full w-full row-start-1 md:row-auto">
            <img
              src={HomepageImage}
              alt="homepage"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="bg-gray-100 py-1 mt-16">
        <div className="max-w-screen-xl mx-auto">
          <OurSpecialties />
        </div>
      </div>

      {/* Third section */}
      <div className="mt-8 md:mt-24">
        <OurExpertises />
      </div>

      {/* Fourth section */}
      <div className="mt-8 md:mt-24">
        <OurApproach />
      </div>

      {/* Fifth section */}
      <div className="mt-8 md:mt-24">
        <OurWork />
      </div>

      {/* Sixth section */}
      <div className="mt-8 md:mt-24">
        <ContactUs />
      </div>

      {/* Contact form modal */}
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
export default Homepage;
