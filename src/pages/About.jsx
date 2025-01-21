import TextGradient from "../components/TextGradient";
import OfficeImage from "../assets/office.png";

function About() {
  return (
    <div className="mt-28 mb-10 lg:mt-32">
      {/* Hero section */}
      <section>
        <div className="w-full md:w-2/3 mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-medium tracking-wide">
            <TextGradient text="IW Studio" />
          </h1>
          <p className="text-sm md:text-base mt-2 lg:mt-4">
            <span className="font-medium text-xl">IW Studio</span> est le studio
            d'
            <span className="font-medium">Ingénierie Web</span> de Next
            Technologie, spécialisé dans la création de services digitaux et
            l'accompagnement sur-mesure pour les entreprises et les
            organisations. Nous proposons des solutions adaptées à vos besoins,
            de courte à longue durée.
          </p>
        </div>
        <div className=" mt-4 p-4 md:p-8 rounded-lg">
          <img
            className="w-full md:w-1/2 mx-auto"
            src={OfficeImage}
            alt="Office"
          />
        </div>
      </section>

      {/* Experiences */}
      <section className="mt-8 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="text-center sm:text-left">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TextGradient text="110" />
            </p>
            <h3 className="text-base md:text-lg font-medium">
              Projets réalisés
            </h3>
            <p className="text-sm">
              Nous sommes actifs dans la création de services digitaux et
              l'accompagnement sur-mesure pour nos clients.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TextGradient text="70" />
            </p>
            <h3 className="text-base md:text-lg font-medium">
              Clients satisfaits
            </h3>
            <p className="text-sm">
              Nous avons accompagné plus de 12 clients dans la création de
              services digitaux.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TextGradient text="5" />
            </p>
            <h3 className="text-base md:text-lg font-medium">
              Années d'expérience
            </h3>
            <p className="text-sm">
              Nous avons plus de 5 ans d'expérience dans la création de services
              digitaux.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TextGradient text="9" />
            </p>
            <h3 className="text-base md:text-lg font-medium">
              profils experts
            </h3>
            <p className="text-sm">
              Nous avons plus de 9 profils experts qui vous accompagne à chaque
              étape de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* What we valuable ? */}
      <section className="mt-8 md:mt-16 bg-slate-300 px-4 py-6 md:py-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Nos valeurs
            </h2>
            <p className="text-sm md:text-base">
              Chez IW Studio, vous avez une équipe passionnée qui respectent la{" "}
              <span className="font-semibold text-primary">
                confidentialité
              </span>
              , la <span className="font-semibold text-primary">sécurité</span>{" "}
              et la <span className="font-semibold text-primary">santé</span> de
              vos <span className="font-semibold text-primary">données</span>.
            </p>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-12">
            <div>
              <h4 className="text-5xl italic">
                {" "}
                <TextGradient text="Innovation" />
              </h4>
              <p className="text-base italic">
                Toujours à la pointe des technologies
              </p>
            </div>
            <div className="lg:ml-32">
              <h4 className="text-5xl italic">
                <TextGradient text="Fiabilité" />
              </h4>
              <p className="text-base italic">
                Des solutions stables et durables
              </p>
            </div>
            <div>
              <h4 className="text-5xl italic">
                <TextGradient text="Transparence" />
              </h4>
              <p className="text-base italic">
                Une communication claire avec nos clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our vision and mission */}
      <section className="mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-14">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Notre vision
            </h2>
            <p className="text-sm md:text-base">
              Développer l'épanouissement de nos collaborateurs et guarantir la
              satisfaction de nos clients.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Notre mission
            </h2>
            <p className="text-sm md:text-base">
              Créer des solutions sur mesure, performantes et sécurisées pour
              les organisations et entreprises ambitieuses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
