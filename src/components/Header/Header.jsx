import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // const {pathname} = useLocation();
  return (
    <>
      <div className="bg-[#232536] ">
        <div className="p-7 flex justify-between border-b-[#FFFFFF0D] border-b-[1px] container">
          <Link to={"/"} className="nav">
            <img src="/Logo.svg" alt="" />
          </Link>
          <div className="flex gap-8 font-medium text-base leading-6">
            <NavLink to={"/"} className="nav">
              Home
            </NavLink>
            <NavLink to={"/service"} className="nav">
              Service
            </NavLink>
            <NavLink to={"/company"} className="nav">
              Company
            </NavLink>
            <NavLink to={"/career"} className="nav">
              Career
            </NavLink>
            <NavLink to={"/login"} className="nav">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
