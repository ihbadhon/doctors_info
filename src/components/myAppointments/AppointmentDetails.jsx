import { useState } from "react";
import { useDoctor } from "../../Context/DoctorContext";
import AppointmentDetail from "./AppointmentDetail";

const AppointmentDetails = () => {
  const { bookmarkedDoctors } = useDoctor();
  // console.log(bookmarkedDoctors);
  const [flag, Setflag] = useState(false);

  const handleFlag = () => {
    Setflag(true);
    setTimeout(() => Setflag(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="">
        <div className="mb-10 grid place-items-center">
          <h1 className="font-bold text-2xl">My Today Appointments</h1>
          <p className="text-[14px] pt-2">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
      </div>
      <div className="w-8/12 m-auto">
        {bookmarkedDoctors.map((book) => {
          return (
            <AppointmentDetail
              book={book}
              handleFlag={handleFlag}
            ></AppointmentDetail>
          );
        })}
      </div>

      {flag && (
        <div className="toast toast-top border-1 border-red-500 rounded-2xl">
          <div className="alert ">
            <span>❌ Appointment Cancelled!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentDetails;
