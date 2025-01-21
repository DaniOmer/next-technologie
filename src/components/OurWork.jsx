import Ecommerce1 from "../assets/ecommerce-1.webp";
import Ecommerce3 from "../assets/ecommerce-3.webp";
import SaasInvoice from "../assets/sass-invoice.webp";

function OurWork() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl tracking-wide">Nos dernières réalisations</h2>
        <p className="text-xs tracking-normal">
          Des solutions sur-mesure pour chaque défi technologique.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <div className="flex flex-col">
            <img
              src={Ecommerce1}
              alt="our-work-1"
              className="w-full object-cover mb-2"
            />
            <h3>Site Ecommerce de vente de parfums</h3>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-black">Stack technique</span> :
              ReactJS, Symfony, PostgreSQL, Tailwindcss
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={SaasInvoice}
              alt="our-work-2"
              className="w-full object-cover mb-2"
            />
            <h3>Application Saas de gestion de facturation</h3>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-black">Stack technique</span> :
              Next.js, TypeScript, mongoDB, Tailwindcss
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={Ecommerce3}
              alt="our-work-3"
              className="w-full object-cover mb-2"
            />
            <h3>Site Ecommerce de vente de mobiliers</h3>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-black">Stack technique</span> :
              Vue.js, TypeScript, fastAPI, Pydantic, SQLAlchemy, PostgreSQL,
              Tailwindcss
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurWork;
