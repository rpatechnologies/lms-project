const ContinueLearningCard = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Continue Learning</h5>
        <div className="d-flex align-items-center justify-content-between">
          <img
            style={{ borderRadius: "10px", width: "40px", height: "auto" }}
            src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
          />
          <div className="d-block">
            <p
              style={{ fontSize: "12px", fontWeight: 700, paddingLeft: "10px" }}
            >
              Familiarization of a gas turbine and power plant.
            </p>
            <p
              style={{
                fontSize: "10px",
                lineHeight: "1px",
                paddingLeft: "10px",
              }}
            >
              dhudo n hgduy fdf bxs{" "}
            </p>
          </div>
        </div>
        <div className="progress" style={{ height: "10px" }}>
          {/* <div  className="progress-bar w-75"  role="progressbar" aria-valuenow="75" aria-valuemin="0"  aria-valuemax="100" ></div> */}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p style={{ fontSize: "10px" }}>dfdf</p>
          <i
            style={{ fontSize: "10px" }}
            className="bi bi-caret-right-fill"
          ></i>
        </div>
        {/* Repeat the above block for other items */}
      </div>
    </div>
  );
};

export default ContinueLearningCard;
