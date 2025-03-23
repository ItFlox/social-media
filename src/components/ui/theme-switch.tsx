import React from "react";
import { useTheme } from "@/lib/theme-provider";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label className="relative inline-block w-[3.5em] h-8 cursor-pointer">
      <input
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="absolute cursor-pointer inset-0 bg-[#20262c] transition-all duration-500 rounded-[30px] before:content-[''] before:absolute before:h-7 before:w-7 before:rounded-full before:left-[10%] before:bottom-[15%] before:bg-[#20262c] before:shadow-[inset_8px_-4px_0px_0px_#ececd9,_-4px_1px_4px_0px_#dadada] before:transition-all before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#efdf2b,_0_0_10px_0px_#efdf2b] peer-checked:bg-[#5494de]" />
      <span className="absolute w-0.5 h-0.5 rounded-full right-[20%] top-[15%] bg-[#e5f041e6] backdrop-blur-[10px] transition-all duration-500 shadow-[_-7px_10px_0_#e5f041e6,_8px_15px_0_#e5f041e6,_-17px_1px_0_#e5f041e6,_-20px_10px_0_#e5f041e6,_-7px_23px_0_#e5f041e6,_-15px_25px_0_#e5f041e6] peer-checked:translate-x-[-20px] peer-checked:w-2.5 peer-checked:h-2.5 peer-checked:bg-white peer-checked:shadow-[-12px_0_0_white,_-6px_0_0_1.6px_white,_5px_15px_0_1px_white,_1px_17px_0_white,_10px_17px_0_white]" />
    </label>
  );
};

export default ThemeSwitch;
