const TeamCollaboration = () => {
    const members = [
        {
            name: "John Carter",
            role: "UI Designer",
            status: "Completed",
            color: "bg-green-100 text-green-700",
        },
        {
            name: "Sophia Lee",
            role: "Frontend Dev",
            status: "In Progress",
            color: "bg-yellow-100 text-yellow-700",
        },
        {
            name: "Daniel Smith",
            role: "Backend Dev",
            status: "Pending",
            color: "bg-gray-100 text-gray-600",
        },
        {
            name: "Naimur rahman",
            role: "DevOps Engineer",
            status: "Completed",
            color: "bg-gray-100 text-gray-600",
        },
    ];

    return (
        <div  className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col card-hover">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Team Collaboration</h3>

                <button className="text-sm text-green-700 border border-green-600 px-4 py-1.5 rounded-full hover:bg-green-200 transition whitespace-nowrap card-hover">
                    + Add Member
                </button>
            </div>

            {/* Members List */}
            <div className="space-y-4 flex-1">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between cursor-pointer transition-all duration-300 hover:translate-x-1"
                    >
                        {/* Left Side */}
                        <div className="flex items-center gap-3">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                                alt={member.name}
                                className="w-10 h-10 rounded-full"
                            />

                            <div>
                                <p className="text-sm font-medium">
                                    {member.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {member.role}
                                </p>
                            </div>
                        </div>

                        {/* Status */}
                        <span
                            className={`text-xs px-3 py-1 rounded-full ${member.color}`}
                        >
                            {member.status}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TeamCollaboration;