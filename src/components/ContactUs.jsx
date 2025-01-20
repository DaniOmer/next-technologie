import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function ContactUs() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl tracking-wide">Contactez-nous</h2>
        <p className="text-base text-gray-500">
          Vous avez une question, un projet ou simplement besoin d'aide ?
          N'hésitez pas à nous contacter.
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center">
            <FaPhone />
            <span className="ml-2">+225 0556669001</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope />
            <span className="ml-2">direction@nt-ci.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
