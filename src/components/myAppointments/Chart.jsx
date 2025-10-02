import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { useDoctor } from "../../Context/DoctorContext";

const Chart = () => {
  const { bookmarkedDoctors } = useDoctor();

  //   let fee = Number(bookmarkedDoctors.fee.replace(/[^0-9]/g, ""));
  console.log(bookmarkedDoctors);

  return (
    <div className="items-center bg-base-100">
      {bookmarkedDoctors.length >= 1 ? (
        <BarChart width={800} height={400} data={bookmarkedDoctors}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="fee" fill="#8884d8" barSize={30} />
        </BarChart>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chart;
