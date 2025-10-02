import { useState } from "react";
import { useLoaderData } from "react-router";
import AllDoctorsDetail from "./AllDoctorsDetail";
import Counting from "./Counting";

const AllDoctors = () => {
  const data = useLoaderData();
  const [showAll, SetshowAll] = useState(false);
  const visibleData = showAll
    ? data
    : data.slice(0, Math.ceil(data.length / 2));

  return (
    <div>
      <div className="grid place-items-center pb-8 pt-15 w-9/12 m-auto text-center">
        <h1 className="font-bold text-3xl text-center">Our Best Doctors</h1>
        <div>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-center gap-4 p-5">
        {visibleData.map((singledctr) => {
          return (
            <AllDoctorsDetail
              key={singledctr.id}
              singledctr={singledctr}
            ></AllDoctorsDetail>
          );
        })}
      </div>
      <div className="flex justify-center btn-secondary mb-5">
        <button className="btn" onClick={() => SetshowAll(!showAll)}>
          {showAll ? "view less" : "view all"}
        </button>
      </div>

      <Counting></Counting>
    </div>
  );
};

export default AllDoctors;
