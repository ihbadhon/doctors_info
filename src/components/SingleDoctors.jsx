import { useLocation } from "react-router";
import SingleDoctor from "./SingleDoctor";

const SingleDoctors = () => {
  console.log("i am single");
  const location = useLocation();
  const { singledctr } = location.state || {};

  return (
    <div className="grid grid-cols-1 gap-8 md:p-20">
      <SingleDoctor key={singledctr.id} singledctr={singledctr}></SingleDoctor>
    </div>
  );
};

export default SingleDoctors;
