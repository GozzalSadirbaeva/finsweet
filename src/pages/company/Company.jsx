import React from "react";

const Company = () => {
  return (
    <>
      <div className="container py-24">
        <div className="flex justify-between">
          <div className="bg-[#FFD3AF] w-7 h-7"></div>
          <img src="/Shapes.svg" alt="" />
        </div>
        <p className="font-medium text-sm leading-5 uppercase tracking-[3px] text-[#232536]">
          Company
        </p>
        <h2 className="font-semibold text-[48px] leading-[58px] pt-3 pb-6 text-[#232536]">
          Award-winning Company <br /> seen and used by millions <br /> around
          the world.
        </h2>
        <h3 className="text-[#232536] font-normal text-sm leading-6 pb-16">
          It is a long established fact that a reader will be distracted by the
          readable content of a <br /> page when looking at its layout. The
          Maker is a decentralized.
        </h3>
        <div className="flex gap-3">
          <img src="/img1.png" alt="" />
          <img src="/img2.png" alt="" />
          <img src="/img3.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Company;
