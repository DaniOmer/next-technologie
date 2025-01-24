import { useState } from "react";
import TextGradient from "../components/TextGradient";
import TeamCard from "../components/TeamCard";
import { teamData } from "../constants/team";
import ContactUs from "../components/ContactUs";
import ContactFormModal from "../components/ContactFormModal";

function Team() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-28 mb-10 lg:mt-32">
      {/* Hero section */}
      <section>
        <div className="w-full md:w-1/2">
          <h1 className="text-xs font-medium">
            <TextGradient text="Notre équipe" />
          </h1>
          <h2 className="text-lg mt-1 mb-3 md:mb-4 md:text-xl lg:text-2xl text-primary font-medium">
            Rencontrez notre équipe d'expert, <br /> passionnés par l'innovation
            numérique
          </h2>
          <p className="hidden md:block">
            Nous sommes une équipe composée de développeurs, designers,
            architects, et développeurs mobiles, travaillant ensemble pour vous
            accompagner dans votre projet de création de services numériques.
          </p>
        </div>
      </section>
      {/* Team section */}
      <section className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {teamData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
      {/* Contact section */}
      <section className="mt-8 md:mt-16 lg:mt-24">
        <ContactUs setIsOpen={setIsOpen} />
      </section>
      {/* Modal Contact */}
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
export default Team;
