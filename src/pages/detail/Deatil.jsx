import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { request } from "../../../api";
import "./Detail.css";
const Deatil = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    request(`/products/${id}`).then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="p-20 flex gap-10">
        <div className="">
          {data?.images?.map((url) => (
            <img className="w-[110px] h-[90px]" src={url} key={url} alt="" />
          ))}
        </div>
        <div>
          <img src={data?.thumbnail} className="bg-[#f6f6f6] w-full  " alt="" />
        </div>
        <div className="pt-5">
          <h2 className="font-semibold text-3xl">{data?.title}</h2>
          <h4 className="text-sm pb-6">
            Brand: <b>{data?.brand}</b>
          </h4>
          <strong className="text-xl">Price:{data?.price}$</strong>
          <p className="text-sm pt-2">{data?.description}</p>
          <div className="flex gap-5">
            {data?.reviews?.map(({ rating, comment, reviewerName }) => (
              <div className="">
                <div className="flex items-center">
                  <p key={comment}>{rating}</p>
                  <FaStar className="text-yellow" />
                </div>
                <p key={rating}>{comment}</p>
                <h4 key={comment}>Name:{reviewerName}</h4>
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Deatil;
