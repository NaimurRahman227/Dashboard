import {
    LayoutDashboard,
    ListTodo,
    Calendar,
    BarChart3,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    X,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import bgImage from "/Users/Asus/login_dashboard/src/assets/cardbg.jpg"

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate("/login");
        if (setIsOpen) setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside data-aos='fade-down-right'
                className={`
          fixed lg:static top-0 left-0 z-50
          h-full w-72 bg-[#ededed] px-6 py-8 lg:mr-4
          flex flex-col justify-between
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
            >
                <div>
                    <div className="flex justify-end lg:hidden mb-4">
                        <button onClick={() => setIsOpen(false)}>
                            <X size={22} />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 mb-10 ">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                            D
                        </div>
                        <span className="text-3xl font-semibold">Donezo</span>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs text-gray-400 tracking-widest mb-4">
                            MENU
                        </p>

                        <div className="space-y-3">
                            <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
                            <SidebarItem icon={<ListTodo size={18} />} text="Tasks" />
                            <SidebarItem icon={<Calendar size={18} />} text="Calendar" />
                            <SidebarItem icon={<BarChart3 size={18} />} text="Analytics" />
                            <SidebarItem icon={<Users size={18} />} text="Team" />
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400 tracking-widest mb-4">
                            GENERAL
                        </p>

                        <div className="space-y-3">
                            <SidebarItem icon={<Settings size={18} />} text="Settings" />
                            <SidebarItem icon={<HelpCircle size={18} />} text="Help" />

                            {/* Logout */}
                            <div onClick={handleLogout}>
                                <SidebarItem icon={<LogOut size={18} />} text="Logout" />
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${bgImage})`}}
                className=" sm:mt-4 md:mt-24 bg-cover bg-center text-white p-5 rounded-2xl card-hover">
                    <p className="font-semibold mb-2">
                        Download our <br />Mobile App
                    </p>
                    <p className="text-sm opacity-80 mb-4">
                        Get easy access anywhere
                    </p>
                    <button className="bg-white text-green-700 px-4 py-2 rounded-full text-sm font-semibold card-hover">
                        Download
                    </button>
                </div>
            </aside>
        </>
    );
};

const SidebarItem = ({ icon, text, active }) => (
    <div
        className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
      ${active
                ? "bg-green-100 text-green-700 font-medium"
                : "text-gray-600 hover:bg-gray-200"
            }`}
    >
        {icon}
        <span>{text}</span>
    </div>
);

export default Sidebar;