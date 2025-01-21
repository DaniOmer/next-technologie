function ExpertiseCard({ title, description, children }) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center space-y-1 text-center">
      <div>{children}</div>
      <h3 className="mb-2 text-lg md:text-xl font-medium text-gray-900">
        {title}
      </h3>
      <p className="mb-3 text-sm text-gray-500">{description}</p>
    </div>
  );
}
export default ExpertiseCard;
