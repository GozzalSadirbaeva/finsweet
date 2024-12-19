import React from "react";

const Service = () => {
  return (
    <>
      <div className="bg-[#FFE6D2] mb-24">
        <div className="container flex py-24 gap-[251px]">
          <div>
            <p className="font-medium text-sm leading-5 uppercase tracking-[3px] text-[#232536]">
              Our Services
            </p>
            <h2 className="font-semibold text-[48px] leading-[58px] pt-3 pb-6 text-[#232536]">
              We Build Software <br /> Solutionthat Solve Clients <br />
              Business Challenges
            </h2>
            <h3 className="text-[#232536] font-normal text-sm leading-6 pb-10">
              Through True Rich Attended does no end it his mother since
              favourable real <br /> had half every him case in packages enquire
              we up ecstatic.
            </h3>
            <button className="bg-[#444CFC] flex justify-center items-center gap-4 text-white px-8 py-5 font-medium text-base leading-6">
              Request Quote <img src="/Icon.svg" alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-2xl leading-9 text-[#232536] mx-0 my-auto">
            <p>Technical support</p>
            <p>Development</p>
            <p>AWS/Azure </p>
            <p>Consulting</p>
            <p>Information Technology</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
