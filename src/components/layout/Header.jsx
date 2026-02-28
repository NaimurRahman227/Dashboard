import { Search, Mail, Bell, Menu, User } from "lucide-react";

const Header = ({ setIsOpen }) => {
  return (
    <header className="w-full mt-4">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 w-full">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden ms-4"
          >
            <Menu size={22} />
          </button>

          {/* Search */}
          <div className="flex items-center gap-3 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full w-full sm:w-[420px] shadow-sm card-hover">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search task"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <span className="hidden sm:inline text-xs bg-gray-100 px-2 py-1 rounded">
              ⌘ F
            </span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">

          {/* Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Mail className="text-gray-500 cursor-pointer ms-4 card-hover" size={20} />
            <Bell className="text-gray-500 cursor-pointer card-hover" size={20} />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 me-2 rounded-full overflow-hidden ring-2 ring-green-100 object-cover transition-transform duration-300 hover:scale-110 ">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:block text-sm">
              <p className="font-semibold">Totok Michael</p>
              <p className="text-gray-400 text-xs me-4">
                tmichael20@mail.com
              </p>
            </div>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;