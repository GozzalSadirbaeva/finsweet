import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container pb-24">
        <div className="bg-[#666DFF] p-24 grid grid-cols-2 justify-between gap-[122px] items-center">
          <div>
            <p className="font-medium text-sm leading-5  tracking-[3px] text-white">
              NEWSLETTER
            </p>
            <h2 className="font-semibold text-[36px] leading-[54px] pt-3 pb-6 text-white">
              Subscribe our News Letter <br /> to get Latest Updates.
            </h2>
          </div>
          <form action="" className="w-full">
            <input
              type="email"
              placeholder="Paresh@Pixeto.com"
              className="py-5 px-7 w-full outline-none"
            />
          </form>
        </div>
        <div className="pt-24">
          <img src="/shapes2.svg" alt="" />
          <div className="pt-8 flex justify-between">
            <div>
              <h2 className="font-semibold text-[48px] leading-[58px]">
                Let's make <br /> something special
              </h2>
              <p className="font-semibold text-[24px] leading-9 pt-10">
                Let's talk! 🤙
              </p>
              <p className="font-medium text-[18px] leading-7 pt-7">
                020 7993 2905
              </p>
              <p className="font-medium text-[18px] leading-7">
                hi@finsweet.com
              </p>
            </div>
            <div className="flex justify-between gap-16">
              <div className="font-semibold text-base leading-7 flex flex-col gap-3">
                <Link to={"/"}>Home</Link>
                <Link to={"/service"}>Service</Link>
                <Link to={"/company"}>Company</Link>
                <Link to={"/career"}>Career</Link>
              </div>
              <div>
                <ul className="flex flex-col gap-3 font-medium text-base leading-5">
                  <li className="font-semibold text-base leading-7">Service</li>
                  <li>Technical support</li>
                  <li>Testing</li>
                  <li>Development</li>
                  <li>AWS/Azure </li>
                  <li>Consulting</li>
                  <li>Information Technology</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-3 font-medium text-base leading-5">
                  <li className="font-semibold text-base leading-7">
                    Resourses
                  </li>
                  <li>About Us</li>
                  <li>Testimonial</li>
                  <li>Privacy Policy</li>
                  <li>Terms of use</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE6D2]">
        <div className="container py-7 flex justify-between items-center">
          <div className="flex gap-11">
            <img src="/logo6.svg" alt="" />
            <p className="font-medium text-base leading-6">©2021 Finsweet</p>
          </div>
          <div className="flex gap-7">
            <a href="#">
              {" "}
              <img src="facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="/twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="/insta.svg" alt="" />
            </a>
            <a href="#">
              <img src="/in.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
