import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Page introuvable.
          </p>
          <p className="mb-4 font-light text-gray-500">
            Nous somme désolés, mais la page que vous avez demandée n'existe
            pas.
          </p>
          <Link
            to="/"
            className="inline-flex border border-primary hover:bg-primary hover:text-white rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-all ease-in-out delay-75"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
export default PageNotFound;
