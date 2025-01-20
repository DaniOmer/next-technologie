import { VscDebugBreakpointData } from "react-icons/vsc";

const OurSpecialties = () => {
  const SPECIALITIES = [
    "Développement d'application web",
    "Développement d'application mobile",
    "Cloud Computing",
    "Réseaux et Infrastructures",
    "SEO et Marketing Digital",
    "Internet des Objets (IoT)",
  ];

  return (
    <div className="relative overflow-hidden bg-gray-100 py-4 flex">
      <ul className="animate-infinite-scroll whitespace-nowrap flex gap-4">
        {[...SPECIALITIES, ...SPECIALITIES].map((speciality, index) => (
          <li
            key={index + speciality}
            className="list-none flex justify-center items-center"
          >
            <VscDebugBreakpointData />
            <span className="ml-1">{speciality}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurSpecialties;
