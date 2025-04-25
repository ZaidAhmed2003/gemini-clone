import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="flex-1 min-h-screen bg-white">
      {/* Topbar */}
      <div className="flex items-center justify-between px-8 pt-6 text-gray-600 text-lg">
        <p className="font-semibold">Gemini</p>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={assets.user_icon}
          alt="User"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto mt-20 px-8">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-5xl font-light leading-tight">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#EA4335] text-transparent bg-clip-text font-semibold">
              Hello, Dev.
            </span>
          </h1>
          <h2 className="text-4xl text-gray-400 font-semibold mt-4">
            How can I help you today?
          </h2>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <PromptCard
            icon={assets.compass_icon}
            text="Suggest beautiful places to see on an upcoming road trip"
          />
          <PromptCard
            icon={assets.bulb_icon}
            text="Briefly summarize this concept: urban planning"
          />
          <PromptCard
            icon={assets.message_icon}
            text="Brainstorm team bonding activities for our work retreat"
          />
          <PromptCard
            icon={assets.code_icon}
            text="Improve the readability of the following code"
          />
        </div>

        {/* Main Bottom */}
        <div className="absolute bottom-0 max-w-[900px] w-full px-5 mx-auto">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] rounded-full py-2.5 px-8 shadow-sm">
            <input
              type="text"
              placeholder="Enter a Promt here"
              className="focus:outline-none w-full p-2 text-lg bg-transparent"
            />
            <div className="flex items-center gap-4">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.mic_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.send_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
            </div>
          </div>
          <p className="text-sm text-gray-400 my-4 mx-auto text-center font-light">
            Gemini may display iaccurate info, including about people, so double
            check its work.
          </p>
        </div>
      </div>
    </div>
  );
};

const PromptCard = ({ icon, text }) => {
  return (
    <div className="flex flex-col justify-between bg-[#f0f4f9] hover:bg-[#e4e7ec] transition p-4 rounded-xl h-40 cursor-pointer shadow-sm">
      <p className="text-sm text-[#202123] font-medium">{text}</p>
      <img src={icon} alt="icon" className="w-5 self-end" />
    </div>
  );
};

export default Main;
