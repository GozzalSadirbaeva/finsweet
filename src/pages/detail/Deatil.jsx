import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../../api";

const Deatil = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    request(`/products/${id}`).then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <h2>{data?.title}</h2>
      <img src={data?.thumbnail} alt="" />
    </div>
  );
};

export default Deatil;
