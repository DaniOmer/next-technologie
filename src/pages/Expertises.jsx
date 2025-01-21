import TextGradient from "../components/TextGradient";

function Expertises() {
  return (
    <div className="mt-28 mb-10 lg:mt-32">
      {/* Hero section */}
      <section>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto md:text-center">
          <h1 className="text-3xl lg:text-5xl font-medium tracking-wide">
            <TextGradient text="Nos expertises" />
          </h1>
          <p className="text-base lg:text-lg mt-2 lg:mt-4">
            Chez IW Studio, nous proposons un pannel de service digitaux et un
            accompagnement sur-mesure, court, moyen et long terme selon les
            besoins de votre projet.
          </p>
        </div>
      </section>
      {/* Expertises */}
      <section className="mt-8 md:mt-24">
        {/* Developement section */}
        <div></div>
      </section>
    </div>
  );
}
export default Expertises;
