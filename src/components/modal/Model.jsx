import { memo } from "react";
import "./Model.css";
const Model = ({ children, close }) => {
  return (
    <>
      <div
        onClick={() => close(false)}
        className="fixed top-0 left-0 w-full h-screen bg-[#0008]"
      ></div>
      <div className="fixed top-2/4 left-2/4 bg-white anima">{children}</div>
    </>
  );
};

export default memo(Model);
