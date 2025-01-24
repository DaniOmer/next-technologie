import { CiImageOn } from "react-icons/ci";

function TeamCard({ name, role, image }) {
  return (
    <div className="w-full rounded-lg flex flex-col items-center space-y-1 text-center mb-4">
      <div className="w-full h-full">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] lg:h-[330px] object-cover"
          />
        ) : (
          <CiImageOn className="w-full h-[400px] lg:h-[330px] object-cover" />
        )}
      </div>
      <h3 className="mb-2 mt-1 text-lg md:text-xl font-medium text-gray-900">
        {name}
      </h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
export default TeamCard;
