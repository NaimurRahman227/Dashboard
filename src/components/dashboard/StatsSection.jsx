
const StatsSection = () => {
    return (
        <div className="space-y-10">

            {/* ===== Dashboard Header ===== */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* Left Section */}
                <div className="max-w-xl">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
                        Dashboard
                    </h1>

                    <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed mb-4">
                        Plan, prioritize and accomplish your tasks with ease and clarity.
                    </p>
                </div>

                {/* Right Section Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">



                    <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-green-700 text-white text-sm font-medium hover:bg-green-500 transition card-hover">
                        + Add Project
                    </button>

                    <button className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-green-800 text-sm font-medium hover:bg-green-200 transition card-hover ">
                        Import Data
                    </button>



                </div>
            </div>
        </div>
    );
};

export default StatsSection;