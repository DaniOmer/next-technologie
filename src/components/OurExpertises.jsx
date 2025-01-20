import ExpertiseItem from "./ExpertiseItem";

import DevelopmentImage from "../assets/development.jpg";
import NetworkImage from "../assets/network.jpg";
import IoTImage from "../assets/iot.jpg";

function OurExpertises() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <h2 className="text-2xl tracking-wide">Notre expertise</h2>
        <p className="text-xs tracking-normal">
          Chez IW Studio, nous proposons une gamme complète{" "}
          <br className="hidden md:block" /> de services pour répondre à vos
          besoins technologiques.
        </p>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-4 md:grid-cols-3 gap-4 mt-6">
        <div className="md:row-span-3">
          <ExpertiseItem image={NetworkImage} title="Système & Réseau" />
        </div>
        <div className="md:row-span-4">
          <ExpertiseItem image={DevelopmentImage} title="Development" />
        </div>
        <div className="md:row-span-3 md:row-start-2 md:col-start-3">
          <ExpertiseItem image={IoTImage} title="Internet des objets" />
        </div>
      </div>
    </section>
  );
}
export default OurExpertises;
