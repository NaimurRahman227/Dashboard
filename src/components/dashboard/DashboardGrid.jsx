import StatCard from "./StatCard";
import ProjectAnalysis from "./ProjectAnalysis";
import RemindersCard from "./RemindersCard";
import ProjectsListCard from "./ProjectsListCard";
import TeamCollaboration from "./TeamCollaboration";
import ProjectProgress from "./ProjectProgress";
import TimeTracker from "./TimeTracker";

const DashboardGrid = () => {
    return (
        <div className="h-full flex flex-col gap-6">

            {/* ===== ROW 1 (Unchanged) ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex-shrink-0">
                <StatCard title="Total Projects" value="24" highlight />
                <StatCard title="Ended Projects" value="12" />
                <StatCard title="Running Projects" value="7" />
                <StatCard title="Pending Projects" value="5" />
            </div>

            {/* ===== SHARED GRID SYSTEM (20 Columns) ===== */}
            <div className="grid grid-cols-1 md:grid-cols-20 gap-6 flex-1">
                
                {/* --- MD ROW 2: 60% | 40% --- */}
                {/* --- LG ROW 2: 50% | 25% | 25% (Adjusted to fit 4-card row logic) --- */}
                <div className="md:col-span-12 lg:col-span-10">
                    <ProjectAnalysis />
                </div>

                <div className="md:col-span-8 lg:col-span-5">
                    <RemindersCard />
                </div>

                {/* --- MD ROW 3: 40% | 60% --- */}
                {/* ProjectsList: MD 40% (8/20) | LG 25% (5/20) */}
                <div className="md:col-span-8 lg:col-span-5">
                    <ProjectsListCard />
                </div>

                {/* --- MD ROW 3 Continued / LG ROW 3 --- */}
                {/* TeamCollab: MD 12/20 (60%) | LG 9/20 (45%) */}
                <div className="md:col-span-12 lg:col-span-9">
                    <TeamCollaboration />
                </div>

                {/* --- MD ROW 4: 50% | 50% --- */}
                {/* ProjectProgress: MD 10/20 (50%) | LG 6/20 (30%) */}
                <div className="md:col-span-10 lg:col-span-6">
                    <ProjectProgress />
                </div>

                {/* TimeTracker: MD 10/20 (50%) | LG 5/20 (25%) */}
                <div className="md:col-span-10 lg:col-span-5">
                    <TimeTracker />
                </div>
            </div>
        </div>
    );
};

export default DashboardGrid;