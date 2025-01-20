import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import ContactFormModal from "./ContactFormModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 h-[60px] border-b">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex flex-col justify-center items-center">
            <h1 className="text-2xl uppercase m-0">IW Studio</h1>
            <span className="text-[8px]">By NEXT TECHNOLOGIE</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              className="flex justify-between items-center border border-primary bg-primary text-white hover:bg-transparent hover:text-black rounded-full text-sm px-2.5 py-1.5 transition-all ease-in-out delay-75 group"
              onClick={() => setIsOpen(true)}
            >
              <span className="block">Contact</span>
              <span className="block p-1.5 rounded-full bg-white text-black ml-2 group-hover:bg-primary group-hover:text-white group-hover:animate-pulse">
                <IoIosArrowRoundForward />
              </span>
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-14 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="lg:border border-transparent px-3 py-1.5 rounded-full hover:border-slate-300 transition-all ease-in delay-150"
                  aria-current="page"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-expertise"
                  className="lg:border border-transparent px-3 py-1.5 rounded-full hover:border-slate-300 transition-all ease-in delay-150"
                  aria-current="page"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-work"
                  className="lg:border border-transparent px-3 py-1.5 rounded-full hover:border-slate-300 transition-all ease-in delay-150"
                  aria-current="page"
                >
                  Studio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
