const OverviewCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontSize: "13px", fontWeight: 700 }}
        >
          OverView
        </h5>
        <img
          className="text-center"
          src="https://preview.redd.it/6rarrip64ut61.png?width=1200&format=png&auto=webp&s=9f3e7043f9f77f5c83659002a9013d1a504a49f0"
          style={{ width: "200px", height: "auto" }}
        />
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="first"
              style={{
                borderRadius: "50%",
                height: "10px",
                width: "10px",
                backgroundColor: "rgb(64, 13, 146)",
              }}
            ></div>
            <p style={{ fontSize: "12px" }}>hello</p>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="second"
              style={{
                borderRadius: "50%",
                height: "10px",
                width: "10px",
                backgroundColor: "rgb(5, 98, 114)",
              }}
            ></div>
            <p style={{ fontSize: "12px" }}>diksha</p>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="third"
              style={{
                borderRadius: "50%",
                height: "10px",
                width: "10px",
                backgroundColor: "rgb(0, 255, 242)",
              }}
            ></div>
            <p style={{ fontSize: "12px" }}>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
