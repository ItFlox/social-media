import React from "react";

const Loader = () => {
  return (
    <div className="w-[200px] h-[60px] relative z-[1]">
      <div className="w-5 h-5 absolute rounded-full bg-white left-[15%] origin-center animate-bounce1"></div>
      <div className="w-5 h-5 absolute rounded-full bg-white left-[45%] origin-center animate-bounce2"></div>
      <div className="w-5 h-5 absolute rounded-full bg-white right-[15%] origin-center animate-bounce3"></div>
      <div className="w-5 h-1 rounded-full bg-black/90 absolute top-[62px] origin-center z-[-1] left-[15%] blur-[1px] animate-shadow1"></div>
      <div className="w-5 h-1 rounded-full bg-black/90 absolute top-[62px] origin-center z-[-1] left-[45%] blur-[1px] animate-shadow2"></div>
      <div className="w-5 h-1 rounded-full bg-black/90 absolute top-[62px] origin-center z-[-1] right-[15%] blur-[1px] animate-shadow3"></div>
    </div>
  );
};

export default Loader;
