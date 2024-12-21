import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center container  w-[30px] h-[40px]">
        <div className="mt-[300px]">
          <form action="" className="flex flex-col gap-5">
            <input type="text" placeholder="Username" className="bg-gray-200" />
            <input type="text" placeholder="Password" className="bg-gray-200" />
            <button type="submit">Submit</button>
            <button onClick={() => navigate("/")}>Go home</button>
            <button onClick={() => navigate(-1)}>Go back</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
