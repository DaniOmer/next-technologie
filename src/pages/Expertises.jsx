import { CgWebsite } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCloudCode } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { FaDesktop } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";

import TextGradient from "../components/TextGradient";
import ExpertiseCard from "../components/ExpertiseCard";

function Expertises() {
  return (
    <div className="mt-28 mb-10 lg:mt-32">
      {/* Hero section */}
      <section>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto md:text-center">
          <h1 className="text-3xl lg:text-5xl font-medium tracking-wide">
            <TextGradient text="Nos expertises" />
          </h1>
          <p className="text-sm md:text-base mt-2 lg:mt-4">
            Chez IW Studio, nous proposons un pannel de service digitaux et un
            accompagnement sur-mesure, court, moyen et long terme selon les
            besoins de votre projet.
          </p>
        </div>
      </section>
      {/* Expertises */}
      <section className="mt-8 md:mt-24">
        {/* Developement section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-1">
              Développement d'applications
            </h2>
            <p className="text-sm md:text-base">
              Nous créons des applications web, mobiles et desktop pour vos
              besoins, en utilisant des technologies modernes et adaptées à vos
              besoins.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExpertiseCard
              title="Création de site vitrine"
              description="Création de sites corporate sous Wordpress, Shopify, Prestashop, Magento, etc..."
            >
              <CgWebsite className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Création de site e-commerce"
              description="Nous sommes spécialisé dans le développement ecommerce en NoCode ou avec Node.js, Django, FastAPI, React.js, TailwindCSS, etc..."
            >
              <MdOutlineShoppingCart className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Création d'applications Saas"
              description="Nous sommes spécialisés dans le développement de SaaS avec Symfony, Node.js, Django, FastAPI, React.js, TailwindCSS, etc..."
            >
              <TbCloudCode className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Création d'applications mobile"
              description="Nous sommes spécialisés dans le développement mobile avec React native, Expo, Redux Toolkit, etc..."
            >
              <ImMobile className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Création d'applications native"
              description="Nous sommes spécialisés dans le développement native pour desktop avec React.js, Electron.js, TailwindCSS  etc..."
            >
              <FaDesktop className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Création d'intranet"
              description="Nous sommes spécialisés dans le développement de solutions de communication internes efficaces pour votre entreprise ou organisation."
            >
              <TbWorldCode className="w-10 h-10 text-primary" />
            </ExpertiseCard>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Expertises;
