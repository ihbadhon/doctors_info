import { useLocation } from "react-router";
import SingleDoctor from "./SingleDoctor";

const SingleDoctors = () => {
  console.log("i am single");
  const location = useLocation();
  const { singledctr } = location.state || {};

  return (
    <div className="grid grid-cols-1">
      <SingleDoctor singledctr={singledctr}></SingleDoctor>
    </div>
  );
};

export default SingleDoctors;
