import React from "react";
import { assets } from "./../../assets/assets";

const Sidebar = () => {
  return (
    <div className="h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6.5 px-4">
      <div className="">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-5 block ml-2.5 cursor-pointer"
        />
        <div className="mt-3 inline-flex items-center gap-2.5 cursor-pointer py-2.5 px-4 bg-[#e6eaf1] rounded-[50px] text-sm text-gray-600">
          <img src={assets.plus_icon} alt="" className="w-5" />
          <p>New Chat</p>
        </div>
        <div className="">
          <p className="">Recent</p>
          <div className="">
            <img src={assets.message_icon} alt="" className="w-5" />
            <p>What is React?</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <img src={assets.question_icon} alt="" className="w-5" />
          <p>Help</p>
        </div>
        <div className="">
          <img src={assets.history_icon} alt="" className="w-5" />
          <p>Activity</p>
        </div>
        <div className="">
          <img src={assets.setting_icon} alt="" className="w-5" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
