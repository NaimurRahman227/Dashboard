const ProjectProgress = () => {
  const completed = 41;
  const inProgress = 35;

  const totalArc = 283; // Half circle length
  const completedArc = (completed / 100) * totalArc;
  const progressArc = (inProgress / 100) * totalArc;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center w-full h-full card-hover">

      <h3 className="font-semibold text-lg mb-6">Project Progress</h3>

      {/* Wider Half Circle */}
      <div className="relative w-22 lg:w-48 sm:w-80 h-36 sm:h-40">
        <svg viewBox="0 0 200 100" className="w-full h-full">

          {/* Pending Base Line (solid strike style) */}
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Completed */}
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="#14532d"
            strokeWidth="18"
            strokeDasharray={`${completedArc} ${totalArc}`}
            strokeLinecap="round"
          />

          {/* In Progress */}
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="#22c55e"
            strokeWidth="18"
            strokeDasharray={`${progressArc} ${totalArc}`}
            strokeDashoffset={`-${completedArc}`}
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage */}
        <div className="absolute inset-0 flex flex-col items-center mt-16 justify-center pb-3 text-2xl font-bold text-gray-800">
          <span className="text-4xl font-bold text-gray-800">
            {completed}%
          </span>

          <span className="text-[11px] text-green-800 mt-1">
            Projects Ended
          </span>
        </div>
      </div>

      {/* Legend - Responsive, One Row */}
      <div className="mt-8 flex  justify-center items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 w-full">

        {/* Completed */}
        <div className="flex items-center gap-1 whitespace-nowrap text-[11px]">
          <span className="w-3 h-3 rounded-full bg-green-900"></span>
          Completed
        </div>

        {/* In Progress */}
        <div className="flex items-center gap-1 whitespace-nowrap text-[11px]">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          In Progress
        </div>

        {/* Pending (Solid Strike Style Line) */}
        <div className="flex items-center gap-1 whitespace-nowrap text-[11px]">
          <span className="w-6 h-[4px] rounded-full bg-gray-300"></span>
          Pending
        </div>

      </div>
    </div>
  );
};

export default ProjectProgress;