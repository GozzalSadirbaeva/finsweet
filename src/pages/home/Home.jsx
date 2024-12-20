import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../../../api";
export const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    request.get("/products").then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="bg-[#232536] mb-24">
        <div className="container">
          <div className="flex gap-20 pt-24 ">
            <div className="mx-0 my-auto">
              <h1 className="font-semibold text-[56px] leading-[68px] text-white">
                Transform Your Idea <br /> Into Reality with Finsweet
              </h1>
              <h3 className="font-normal text-base leading-6 pt-6 text-white pb-8">
                The entire Finsweet team knows what's good with Webflow and{" "}
                <br /> you can too with 1 week and a good attitude.
              </h3>
              <button className="bg-[#444CFC] flex justify-center items-center gap-4 text-white px-8 py-5 font-medium text-base leading-6">
                Request Quote <img src="/Icon.svg" alt="" />
              </button>
            </div>
            <div>
              <img src="/Image.png" alt="" />
            </div>
          </div>
          <div className="flex pt-8 justify-between">
            <div className="pt-7 text-white">
              <p className="font-medium text-sm leading-5">Our Clients</p>
              <p className="font-medium text-[18px] leading-7">
                We've Worked with
              </p>
            </div>
            <img src="/Logo1.svg" alt="" />
            <img src="/Logo2.svg" alt="" />
            <img src="/Logo3.svg" alt="" />
            <img src="/Logo5.svg" alt="" />
            <img src="/Logo4.svg" alt="" />
          </div>
          <div>
            {data?.products?.map((item) => (
              <div key={item.id} className="inline-block">
                <img
                  onClick={() => navigate(`/product/${item.id}`)}
                  src={item.thumbnail}
                  alt=""
                />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
