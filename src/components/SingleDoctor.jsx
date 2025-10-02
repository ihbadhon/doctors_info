const SingleDoctor = ({ singledctr }) => {
  console.log(singledctr);

  return (
    <div>
      <div>
        <h1>Doctor’s Profile Details</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img src={singledctr.image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{singledctr.name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
