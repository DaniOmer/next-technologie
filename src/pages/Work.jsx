import { useState } from "react";

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
      <section>
        <div className="w-full md:w-2/3 mx-auto md:text-center">
          <h1 className="text-3xl lg:text-5xl font-medium tracking-wide">
            <TextGradient text="Nos dernières réalisations" />
          </h1>
          <p className="text-sm md:text-base mt-2 lg:mt-4">
            Chez IW Studio, chaque projet est une opportunité de repousser les
            limites de la créativité et de la performance. Découvrez comment
            nous avons aidé nos clients à concrétiser leurs ambitions grâce à
            des solutions sur mesure, innovantes et impactantes.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="mt-8 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <div className="flex flex-col min-h-full">
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
          </div>
          <div className="flex flex-col min-h-full">
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
          </div>
          <div className="flex flex-col min-h-full">
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
          </div>
          <div className="flex flex-col min-h-full">
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
          </div>
          <div className="flex flex-col min-h-full">
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
          </div>
          <div className="flex flex-col min-h-full">
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
          </div>
        </div>
      </section>

      {/* Contact us */}
      <div className="mt-8 md:mt-24">
        <ContactUs setIsOpen={setIsOpen} />
      </div>

      {/* Modal Contact */}
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
export default Work;
