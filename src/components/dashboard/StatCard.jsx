import { ArrowUpRight, TrendingUp } from "lucide-react";

const StatCard = ({ title, value, highlight }) => {
  return (
    <div
      className={`relative p-6 rounded-2xl shadow-sm transition card-hover mt-4
      ${highlight
        ? "bg-gradient-to-b from-green-800 to-green-600 text-white"
        : "bg-white"}`}
    >
      {/* Arrow top right */}
      <ArrowUpRight
        className={`absolute top-5 right-5 border rounded-full bg-white ${
          highlight ? "text-black" : "text-gray-600"
        }`}
        size={28}
      />

      <h3 className={`text-sm ${highlight ? "text-green-100" : "text-gray-500"}`}>
        {title}
      </h3>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
        {value}
      </h2>

      <div className="flex items-center gap-2 mt-4 text-sm">
        <TrendingUp size={16} />
        <span>Increased from last month</span>
      </div>
    </div>
  );
};

export default StatCard;