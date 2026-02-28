import { Calendar, Play , Video } from "lucide-react";

const RemindersCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col h-full justify-between card-hover min-h-[250px]">
      <div>
        <h3 className="font-semibold mb-4">Reminders</h3>

        <p className="font-medium text-green-900 lg:mt-16">Meeting with Arc <br />Company</p>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <Calendar size={14} />
          <span>2:00pm - 4:00pm</span>
        </div>
      </div>

      <button className="md:mt-6 w-full bg-green-700 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-800 transition card-hover">
        <Video size={16} />
        Start Meeting
      </button>
    </div>
  );
};

export default RemindersCard;