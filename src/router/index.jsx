import Deatil from "@/pages/detail/Deatil";
import { Route, Routes } from "react-router-dom";
import Career from "../pages/career/Career";
import Company from "../pages/company/Company";
import { Home } from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Login from "../pages/login/Login";
import NotFound from "../pages/not-found/NotFound";
import Service from "../pages/servi/Service";

const Routers = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="/product/:id" element={<Deatil />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default Routers;
