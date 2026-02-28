import {Square, Pause } from "lucide-react";
import bgImage from "/Users/Asus/login_dashboard/src/assets/cardbg.jpg"

const TimeTracker = () => {
  return (
    <div
    style={{backgroundImage:`url(${bgImage})`}}
    className="bg-cover bg-center p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-full card-hover">
      <h3 className="font-semibold text-white text-2xl  mb-6">Time Tracker</h3>

      <div className="text-3xl text-white font-mono font-semibold">
        01:24:08
      </div>

      <div className="flex gap-6 mt-6">
        <button className="bg-white text-black p-3 rounded-full card-hover">
          <Pause size={18} />
        </button>

        <button className="bg-red-600 p-3 rounded-full text-white hover:text-black transition card-hover">
          <Square size={18} fill='white' stroke='white' strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;