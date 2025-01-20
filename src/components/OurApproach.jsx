import { FaUsers } from "react-icons/fa6";

function OurApproach() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8">
      <div className="mt-8 mb-6">
        <h2 className="text-2xl tracking-wide">
          Une équipe passionnée, <br /> une approche agile
        </h2>
        <p className="text-base text-gray-500">
          Chez IW Studio, nous transformons vos idées en solutions performantes
          grâce à une méthodologie agile basée sur quatre piliers.
        </p>
      </div>
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-1">
            <div className="w-fit p-2.5 text-3xl bg-gray-200 rounded-xl">
              <FaUsers />
            </div>
            <h3 className="text-lg font-medium">
              Collaboration continue avec le client
            </h3>
            <p className="text-sm text-gray-500">
              Vous êtes au cœur de notre processus. Nous travaillons main dans
              la main pour garantir que chaque livrable correspond à vos
              attentes.
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="w-fit p-2.5 text-3xl bg-gray-200 rounded-xl">
              <FaUsers />
            </div>
            <h3 className="text-lg font-medium">
              Livraisons itératives et rapides
            </h3>
            <p className="text-sm text-gray-500">
              Nous découpons vos projets en petites étapes pour fournir
              rapidement des résultats concrets et les ajuster en fonction de
              vos retours.
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="w-fit p-2.5 text-3xl bg-gray-200 rounded-xl">
              <FaUsers />
            </div>
            <h3 className="text-lg font-medium">Flexibilité et adaptation</h3>
            <p className="text-sm text-gray-500">
              Vos besoins évoluent ? Nous nous adaptons en cours de route pour
              vous offrir des solutions alignées sur vos objectifs.
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="w-fit p-2.5 text-3xl bg-gray-200 rounded-xl">
              <FaUsers />
            </div>
            <h3 className="text-lg font-medium">
              Qualité au cœur de chaque étape
            </h3>
            <p className="text-sm text-gray-500">
              Chaque livrable passe par des tests rigoureux pour garantir sa
              fiabilité et sa performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurApproach;
