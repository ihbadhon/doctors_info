import AppointmentDetails from "./AppointmentDetails";
import Chart from "./Chart";

const MyAppointments = () => {
  return (
    <div className=" bg-base-100">
      <div className="place-items-center mb-20 mt-20">
        <Chart></Chart>
      </div>
      <AppointmentDetails></AppointmentDetails>
    </div>
  );
};

export default MyAppointments;
