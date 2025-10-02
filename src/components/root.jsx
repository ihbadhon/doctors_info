import { Outlet } from "react-router";
import { DoctorProvider } from "../Context/DoctorContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const root = () => {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <DoctorProvider>
        <div className="w-11/12 m-auto">
          <Outlet></Outlet>
        </div>
      </DoctorProvider>

      <Footer></Footer>
    </div>
  );
};

export default root;
