import { useState } from "react";
import { useDoctor } from "../Context/DoctorContext";
import SectionColor from "./SectionColor";

const SingleDoctor = ({ singledctr }) => {
  const { addBookmark, bookmarkedDoctors } = useDoctor();
  const [flag, Setflag] = useState(false);

  const handleBookmark = (doctor) => {
    addBookmark(doctor);
    const isAlreadyBookmarked = bookmarkedDoctors.some(
      (d) => d.id === doctor.id
    );
    if (!isAlreadyBookmarked) Setflag(true);
    setTimeout(() => Setflag(false), 2000);
  };

  return (
    <div className="md:p-15 p-5 ">
      <div className="flex justify-center flex-col place-items-center text-center mb-14">
        <h1 className="font-bold text-2xl ">Doctor’s Profile Details</h1>
        <SectionColor></SectionColor>
        <p className="md:w-11/12 text-gray-500 mt-3">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure className="h-55 rounded-2xl">
            <img src={singledctr.image} alt="Movie" />
          </figure>
          <div className="card-body pt-1">
            <h2 className="card-title">{singledctr.name}</h2>
            <div className="text-gray-500">
              {singledctr.education} <br></br>
              {singledctr.speciality} <br></br>
              working at <br></br>
              <p className="font-bold text-black">{singledctr.workplace} </p>
              <hr className="border-t-1 border-dashed border-gray-300 my-1" />
              {singledctr.registrationNumber}
              <hr className="border-t-1 border-dashed border-gray-300 my-1" />
              <div className="flex gap-x-5">
                <div className="font-bold text-black">Availability </div>
                {singledctr.availability.map((day, ind) => {
                  return (
                    <div key={ind} className="text-orange-400">
                      {day}{" "}
                    </div>
                  );
                })}
              </div>
              <div>
                <span className="text-blue-500 text-sm">
                  Consultation fee: {singledctr.fee}{" "}
                  <span className="text-gray-400"> (incl. vat) </span>
                  per consultation{" "}
                </span>
              </div>
            </div>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>
      </div>
      {/* below part */}
      <div>
        <div className="text-center pt-5 font-bold">Book an Appointment</div>
        <hr className="border-t-1 border-dashed border-gray-300 my-1" />

        <div className="flex justify-between">
          <div>Availability</div>
          <div className="text-green-600 bg-green-100 rounded-2xl text-[12px] p-1">
            Doctor Available Today
          </div>
        </div>
        <hr className="border-t-1 border-dashed border-gray-300 my-1" />

        <div className="text-orange-400 bg-amber-100  mb-5 rounded-2xl p-2 text-[12px]">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </div>
        <button
          onClick={() => handleBookmark(singledctr)}
          className="btn btn-primary w-11/12 m-auto flex text-center rounded-2xl"
        >
          Book Appointment Now
        </button>
      </div>

      {flag && (
        <div className="toast toast-top">
          <div className="alert border-1 border-green-700">
            <span>✅ Appointment Added!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleDoctor;
