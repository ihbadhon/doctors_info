import { Link } from "react-router";

const AllDoctorsDetail = ({ singledctr }) => {
  return (
    <div className="w-full flex">
      <div className="card bg-base-100 w-96 shadow-sm p-2">
        <figure>
          <img src={singledctr.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {singledctr.name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>
            {singledctr.education} - {singledctr.speciality}
          </p>
          <div>
            <hr className="border-t-1 border-dashed border-gray-300 my-1" />
            Reg No: {singledctr.registrationNumber}
          </div>
          <div className="card-actions  w-full  ">
            {/* <div className="badge badge-outline">Fashion</div> */}
            {/* <div className="badge badge-outline">Products</div> */}
            <Link to={"/singleDoctor"} state={{ singledctr }}>
              <button className="btn btn-sm  w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctorsDetail;
