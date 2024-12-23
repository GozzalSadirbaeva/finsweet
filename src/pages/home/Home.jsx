import Model from "@/components/modal/Model";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { request } from "../../../api";
export const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 10,
        },
      })
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          {data?.products?.map((item) => (
            <div key={item.id} className="">
              <div className="bg-slate-500 rounded-xl">
                <img
                  onClick={() => {
                    setSelectedProduct(item), setShow(true);
                  }}
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <h3 className=" font-bold text-lg pt-3 pb-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {show && selectedProduct && (
        <Model close={setShow}>
          <div className="w-[400px] p-5">
            <button
              className="fixed right-5 text-2xl"
              onClick={() => setShow(false)}
            >
              <FaXmark />
            </button>
            <img className="w-full" src={selectedProduct.thumbnail} alt="" />
            <h2 className="font-bold text-lg">{selectedProduct.title}</h2>
            <h2 className="font-medium text-base capitalize pb-3">
              Category: {selectedProduct.category}
            </h2>
            <button
              className="px-5 py-1 rounded-lg bg-blue-400 text-white "
              onClick={() => navigate(`/product/${selectedProduct.id}`)}
            >
              See more...
            </button>
          </div>
        </Model>
      )}
    </>
  );
};
