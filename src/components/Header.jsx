import React from "react";
import infoIcon from "../assets/info.svg";
import caretIcon from "../assets/caret.svg";
import gearIcon from "../assets/gear.svg";
import avatar from "../assets/avatar.png";
import { Settings } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between">
      {/* Left section */}
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
        Resume Builder
      </h2>
      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Info icon */}
        <img
          src={infoIcon}
          alt="Info"
          className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
        />

        {/* Gear icon */}
        <img
          src={gearIcon}
          alt="Info"
          className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
        />

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Caret (rotated 180°) */}
        <img
          src={caretIcon}
          alt="Caret"
          className="w-4 h-4 transform cursor-pointer hover:opacity-80 transition"
        />
      </div>
    </div>
  );
}
