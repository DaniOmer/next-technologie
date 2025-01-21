import { useState } from "react";
import { Link } from "react-router-dom";

import ContactFormModal from "./ContactFormModal";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="h-[60px] flex justify-center items-center border-t">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © {Date().split(" ")[3]}{" "}
          <Link to="/" className="hover:underline">
            Next Technologie™
          </Link>
          . Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <Link to="/about-us" className="hover:underline me-4 md:me-6">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/our-team" className="hover:underline me-4 md:me-6">
              Notre équipe
            </Link>
          </li>
          <li>
            <button className="hover:underline" onClick={() => setIsOpen(true)}>
              Contact
            </button>
          </li>
        </ul>
      </div>
      {/* Modal Contact */}
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </footer>
  );
}
export default Footer;
