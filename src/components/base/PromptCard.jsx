import React from "react";

const PromptCard = ({ icon, text }) => {
  return (
    <div className="flex flex-col justify-between bg-[#f0f4f9] hover:bg-[#e4e7ec] transition p-5 rounded-xl h-48 cursor-pointer shadow-sm">
      <p className="text-[#202123] font-medium">{text}</p>
      <img src={icon} alt="icon" className="w-5 self-end" />
    </div>
  );
};

export default PromptCard;
