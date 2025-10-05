import SectionColor from "./SectionColor";
import SingleCounting from "./SingleCounting";
const stats = [
  { label: "Total Doctors", end: 5 },
  { label: "Total Reviews", end: 53 },
  { label: "Patients", end: 211 },
  { label: "Total Staffs", end: 13 },
];
const Counting = () => {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center pb-8 mt-20">
        <h1 className="font-bold text-2xl">We Provide Best Medical Services</h1>
        <SectionColor></SectionColor>
        <p className="text-sm text-gray-400 mt-2">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>
      <div className="md:flex gap-8 justify-center mb-15 grid grid-cols-1 text-center place-items-center">
        {stats.map((e, index) => (
          <SingleCounting key={index} e={e} />
        ))}
      </div>
    </div>
  );
};

export default Counting;
