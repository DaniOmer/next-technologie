import { CgWebsite } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCloudCode } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { FaDesktop } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { AiOutlineCloudSync } from "react-icons/ai";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FaShieldAlt } from "react-icons/fa";
import { TbCloud } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { TbPalette } from "react-icons/tb";
import { TbTypography } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { ImFilePicture } from "react-icons/im";
import { TbVideoPlus } from "react-icons/tb";
import { FaBezierCurve } from "react-icons/fa";

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

        {/* Network and cloud section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-24">
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-1">
              Cloud et DevOps
            </h2>
            <p className="text-sm md:text-base">
              Nous vous accompagnons dans votre transition vers le cloud,
              l’automatisation et l’optimisation de vos infrastructures IT, tout
              en garantissant robustesse et performance.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExpertiseCard
              title="Migration vers le cloud"
              description="Accompagnement dans la migration de vos applications et données vers des solutions cloud comme AWS, Azure, ou GCP."
            >
              <TbCloud className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Infrastructure as Code (IaC)"
              description="Automatisation de vos infrastructures avec des outils comme Terraform, Ansible, et CloudFormation."
            >
              <MdOutlineCode className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Conteneurs et orchestration"
              description="Mise en œuvre de solutions basées sur Docker et Kubernetes pour une gestion efficace des conteneurs."
            >
              <FaDocker className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="CI/CD et automatisation"
              description="Déploiement rapide et fiable grâce à des pipelines CI/CD configurés avec GitHub Actions, GitLab CI, ou Jenkins."
            >
              <AiOutlineCloudSync className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Surveillance et observabilité"
              description="Implémentation de solutions de monitoring comme Prometheus, Grafana, et ELK Stack pour garantir la stabilité de vos systèmes."
            >
              <AiOutlineRadarChart className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Sécurité des infrastructures"
              description="Mise en place de pratiques DevSecOps pour protéger vos systèmes et données contre les cybermenaces."
            >
              <FaShieldAlt className="w-10 h-10 text-primary" />
            </ExpertiseCard>
          </div>
        </div>

        {/* Design and graphic chart */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-24">
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-1">
              Design et identité visuelle
            </h2>
            <p className="text-sm md:text-base">
              Nous concevons des identités visuelles percutantes et des designs
              uniques pour mettre en valeur votre marque et sublimer vos
              supports de communication.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExpertiseCard
              title="Création de charte graphique"
              description="Conception de chartes graphiques sur mesure pour garantir la cohérence visuelle de votre marque sur tous vos supports."
            >
              <TbPalette className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Design de logos"
              description="Création de logos uniques et mémorables qui reflètent l’identité et les valeurs de votre entreprise."
            >
              <TbTypography className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="UI/UX Design"
              description="Conception d’interfaces utilisateur modernes et intuitives, centrées sur l’expérience utilisateur (UX)."
            >
              <FaLaptopCode className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Supports de communication"
              description="Création de visuels pour vos supports imprimés (flyers, affiches) et numériques (bannières, réseaux sociaux)."
            >
              <ImFilePicture className="w-10 h-10 text-primary" />
            </ExpertiseCard>
            <ExpertiseCard
              title="Prototypes interactifs"
              description="Création de prototypes interactifs pour vos applications web et mobiles, facilitant la validation et le feedback."
            >
              <FaBezierCurve className="w-10 h-10 text-primary" />
            </ExpertiseCard>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Expertises;
