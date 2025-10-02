import { Outlet } from "react-router";
import { DoctorProvider } from "../Context/DoctorContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const root = () => {
  return (
    <div className="w-11/12 m-auto">
      <Navbar></Navbar>
      <DoctorProvider>
        <Outlet></Outlet>
      </DoctorProvider>

      <Footer></Footer>
    </div>
  );
};

export default root;
