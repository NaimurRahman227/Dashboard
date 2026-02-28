import {
  Globe,
  Smartphone,
  Brain,
  ShoppingCart,
} from "lucide-react";

const ProjectsListCard = () => {
  const projects = [
    {
      name: "E-Commerce",
      duration: "4 Months",
      icon: ShoppingCart,
    },
    {
      name: "AI Resume Analyzer",
      duration: "2 Months",
      icon: Brain,
    },
    {
      name: "Portfolio Website",
      duration: "1.5 Months",
      icon: Globe,
    },
    {
      name: "Task Manager App",
      duration: "3 Months",
      icon: Smartphone,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col card-hover">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800">
          Projects
        </h3>

        <button className="text-sm border border-green-700 rounded-2xl px-3 py-1 text-green-700 font-medium hover:bg-green-200 card-hover">
          + New
        </button>
      </div>

      {/* Project List */}
      <div className="md:space-y-4 lg:space-y-1">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                {/* Icon Bubble */}
                <div className="p-2 rounded-lg bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition">
                  <Icon size={16} />
                </div>

                <p className="font-medium text-sm text-gray-800">
                  {project.name}
                </p>
              </div>

              <p className="text-xs text-gray-400 ml-11 mt-1">
                Duration: {project.duration}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsListCard;