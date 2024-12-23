import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="container">
          <div className=" rounded-lg p-20 w-[400px] bg-white justify-self-center">
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Username"
                className="bg-gray-200 p-3 outline-none rounded-lg"
              />
              <input
                type="text"
                placeholder="Password"
                className="bg-gray-200 p-3 outline-none rounded-lg"
              />
              <button type="submit" className="p-2 bg-blue-300 rounded-lg">
                Submit
              </button>
              <div className="flex justify-around">
                <button
                  onClick={() => navigate("/")}
                  className="p-2 bg-blue-300 rounded-lg"
                >
                  Go home
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 bg-blue-300 rounded-lg"
                >
                  Go back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
