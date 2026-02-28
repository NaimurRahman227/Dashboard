import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      {/* Outer Background */}
      <div className="h-screen bg-[#e7e7e7] p-4 sm:p-6 overflow-hidden">

        {/* Main App Container */}
        <div className="relative w-full max-w-[1400px] mx-auto bg-[#f3f3f3] rounded-3xl shadow-xl flex h-full overflow-hidden">

          {/* Sidebar */}
          <Sidebar
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">

            <Header
              dark={dark}
              setDark={setDark}
              setIsOpen={setSidebarOpen}
            />

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              {children}
            </main>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Layout;