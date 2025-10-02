import CountUp from "react-countup";

const SingleCounting = ({ e }) => {
  return (
    <div className="flex flex-col gap-4 bg-amber-50 p-8">
      <h1 className="font-bold text-4xl w-[130px]">
        <CountUp
          start={0}
          end={e.end}
          duration={1.75}
          separator=" "
          decimals={1}
          decimal=""
          //   prefix="EUR "
          //   suffix={e.label}
          enableScrollSpy // 👈 this makes it start on scroll
          scrollSpyDelay={100}
          //   onEnd={() => console.log("Ended! 👏")}
          //   onStart={() => console.log("Started! 💨")}
        >
          {({ countUpRef, start }) => (
            <div>
              <span ref={countUpRef} />+
              {/* <button onClick={start}>Start</button> */}
            </div>
          )}
        </CountUp>
      </h1>
      <h1>{e.label}</h1>
    </div>
  );
};

export default SingleCounting;
