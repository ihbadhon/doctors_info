import { useDoctor } from "../../Context/DoctorContext";

const AppointmentDetail = ({ book, handleFlag }) => {
  //   console.log(book);

  const { removeBookmark } = useDoctor();

  const handleRemoveDoctor = (id) => {
    removeBookmark(id);
    handleFlag();
  };

  return (
    <div className=" p-8 rounded-2xl border-1 border-blue-200 mb-10 bg-blue-50">
      <div className="">
        <div className="flex justify-between pb-5">
          <div className="grid grid-cols-1">
            <div className="font-bold ">{book.name}</div>
            <div className=" text-sm">
              {book.education}-{book.speciality}
            </div>
          </div>
          <div className="text-sm">Appointment fee: {book.fee} tk</div>
        </div>
      </div>
      <hr></hr>
      <div className="w-full mt-5">
        <button
          onClick={() => handleRemoveDoctor(book.id)}
          className="btn border-1 bg-white border-red-600 text-red-600 w-full rounded-2xl "
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetail;
