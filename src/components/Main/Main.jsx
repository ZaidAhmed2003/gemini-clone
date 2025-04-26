import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import PromptCard from "../base/PromptCard";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-[1] flex-col min-h-screen mx-auto bg-white relative">
      {/* Topbar */}
      <div className="flex items-center justify-between w-full px-8 pt-6 text-gray-600 text-lg">
        <p className="font-semibold">Gemini</p>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={assets.user_icon}
          alt="User"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-4xl mx-auto mt-16 px-5 no-scrollbar  overflow-y-auto max-h-[calc(100vh-300px)]">
        {!showResult ? (
          <>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </>
        ) : (
          <div className="px-[5%]">
            <div className="flex mb-10 gap-5 items-center">
              <img src={assets.user_icon} className="w-10 h-10 rounded-full " />
              <p className="">{recentPrompt}</p>
            </div>
            <div className="flex gap-5 items-start">
              <img
                src={assets.gemini_icon}
                className="w-10 h-10 rounded-full "
                alt=""
              />
              {loading ? (
                <div className="w-full flex flex-col gap-5">
                  <hr className="rounded-sm h-5 w-800px  border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] animate-pulse" />
                  <hr className="rounded-sm h-5 w-800px  border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] animate-pulse" />
                  <hr className="rounded-sm h-5 w-800px  border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] animate-pulse" />
                </div>
              ) : (
                <p
                  className="text-[17px] leading-[1.8] text-gray-800 font-light"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-5">
        <div className="flex items-center gap-5 bg-[#f0f4f9] rounded-full py-3 px-8 shadow-md">
          <input
            onChange={(e) => setInput(e.target.value)} // track typing
            onKeyDown={(e) => {
              if (e.key === "Enter") onSent(); // allow Enter key to send
            }}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
            className="focus:outline-none w-full text-lg bg-transparent"
          />
          <div className="flex items-center gap-4">
            <img
              src={assets.gallery_icon}
              alt="Gallery"
              className="w-6 cursor-pointer"
            />
            <img
              src={assets.mic_icon}
              alt="Mic"
              className="w-6 cursor-pointer"
            />
            <img
              src={assets.send_icon}
              alt="Send"
              className="w-6 cursor-pointer"
              onClick={() => onSent()}
            />
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4 text-center font-light">
          Gemini may display inaccurate info, including about people, so
          double-check its work.
        </p>
      </div>
    </div>
  );
};

export default Main;
