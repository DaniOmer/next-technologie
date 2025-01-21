import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import CallTo from "./CallTo";
import MailTo from "./MailTo";

function ContactUs({ setIsOpen }) {
  return (
    <section>
      <div className="px-4 w-full md:w-2/3  mx-auto pt-10 pb-4 mg:pb-10 text-center bg-slate-200 rounded-lg">
        <h2 className="text-2xl tracking-wide mb-2">Contactez-nous</h2>
        <p className="text-sm text-gray-500">
          Vous avez une question, un projet ou simplement besoin d'aide ?
          N'hésitez pas à nous contacter par téléphone ou via le formulaire de
          contact.
        </p>
        <div className="w-full md:w-2/3 mx-auto my-4 mb-8 flex justify-center items-center gap-2">
          {/* Bouton de contact */}
          <button
            className="flex justify-center items-center border border-primary bg-primary text-white hover:bg-transparent hover:text-black rounded-full text-sm px-2.5 py-1.5 transition-all ease-in-out delay-75 group w-full"
            onClick={() => setIsOpen(true)}
          >
            <span className="block">Nous contacter</span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 mt-4 text-xs">
          <CallTo phone="+225 0556669001">
            <div className="flex items-center">
              <FaPhone />
              <span className="ml-2">+225 0556669001</span>
            </div>
          </CallTo>
          <MailTo mail="direction@nt-ci.com">
            <div className="flex items-center">
              <FaEnvelope />
              <span className="ml-2">direction@nt-ci.com</span>
            </div>
          </MailTo>
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
