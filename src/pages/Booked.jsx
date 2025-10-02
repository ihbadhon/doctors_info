import { useDoctor } from "../Context/DoctorContext";

const Booked = () => {
  const { bookmarkedDoctors, removeBookmark } = useDoctor();
  console.log(bookmarkedDoctors);

  return (
    <div>
      <h1>booked</h1>
    </div>
  );
};

export default Booked;
