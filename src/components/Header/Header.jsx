import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="bg-[#232536]">
        <div className="p-7 flex justify-between border-b-[#FFFFFF0D] border-b-[1px] container">
          <img src="/Logo.svg" alt="" />
          <div className="flex gap-8 font-medium text-base leading-6">
            <Link to={"/"} className="nav">
              Home
            </Link>
            <Link to={"/service"} className="nav">
              Service
            </Link>
            <Link to={"/company"} className="nav">
              Company
            </Link>
            <Link to={"/career"} className="nav">
              Career
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
