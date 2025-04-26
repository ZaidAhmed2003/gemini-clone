import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen ${isCollapsed ? "w-16" : "w-64"} 
      bg-[#f0f4f9] flex flex-col justify-between transition-all duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="pt-4">
        {/* Menu Button */}
        <div className="flex justify-start px-5 mb-8">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <img src={assets.menu_icon} alt="menu" className="w-5" />
          </button>
        </div>

        {/* New Chat */}
        <div
          onClick={() => window.location.reload()} // <- click to reload page
          className="flex items-center gap-3 bg-[#e6eaf1] hover:bg-[#dce0e8] transition rounded-full mx-2 px-3 py-2 cursor-pointer"
        >
          <img src={assets.plus_icon} alt="new chat" className="w-5" />
          {!isCollapsed && (
            <p className="text-sm text-gray-700 font-medium whitespace-nowrap">
              New Chat
            </p>
          )}
        </div>

        {/* Recent */}
        <div className="mt-8 px-2">
          {!isCollapsed && (
            <p className="text-gray-500 text-sm mb-4 font-semibold pl-2">
              Recent
            </p>
          )}

          {prevPrompts.map((item, index) => (
            <SidebarItem
              key={index}
              icon={assets.message_icon}
              label={item}
              onClick={() => {
                setRecentPrompt(item);
                onSent(item);
              }}
              collapsed={isCollapsed}
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-1 px-2 pb-4">
        <SidebarItem
          icon={assets.question_icon}
          label="Help"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={assets.history_icon}
          label="Activity"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={assets.setting_icon}
          label="Settings"
          collapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, collapsed, onClick }) => (
  <div
    className="flex items-center gap-3 hover:bg-[#e2e6eb] transition rounded-full px-3 py-2 cursor-pointer"
    onClick={onClick}
  >
    <img src={icon} alt={label} className="w-5" />
    {!collapsed && (
      <p className="text-sm text-gray-800 whitespace-nowrap">{label}</p>
    )}
  </div>
);

export default Sidebar;
