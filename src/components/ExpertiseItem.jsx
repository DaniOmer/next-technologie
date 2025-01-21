import { Link } from "react-router-dom";

import { RiArrowRightUpLine } from "react-icons/ri";

function ExpertiseItem({ image, title }) {
  return (
    <div className="relative flex justify-between items-center rounded-3xl overflow-hidden w-full h-full">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <h3 className="absolute top-3 left-3 text-white bg-black/70 px-3 py-1 rounded-full">
        {title}
      </h3>
      <Link
        to="/our-expertises"
        className="absolute bottom-3 right-3 text-black bg-white shadow p-2 rounded-full"
      >
        <RiArrowRightUpLine />
      </Link>
    </div>
  );
}
export default ExpertiseItem;
