// import ContinueLearningCard from "@/components/ContinueLearningCard/ContinueLearningCard";
import OverviewCard from "@/components/OverviewCard/OverviewCard";
import Card from "@/components/card";
import Navbar from "@/components/header";
import Sidebar from "@/components/sidebar";
import s from  "./styles.module.css"
export default function Home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-block w-100">
        <Navbar />
        <div className="row" style={{ margin: 0 }}>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 mt-2">
            <div
              className="card card-content"
              style={{
                borderRadius: "10px",
                border: "none",
                background:
                  "linear-gradient(90deg, rgb(81, 74, 211) 0%, rgba(66,186,236,1) 0%, rgba(175,242,255,1) 68%)",
              }}
            >
              <div className="card-body text-center">
                <p
                  style={{
                    color: "rgb(32, 6, 92)",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Explore Gas Turbines
                </p>
                <p>budbdbhbhdbcjhduddjdcbhjdbcdhbcjdbcjdsb</p>
                <button
                  className="btn"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "rgb(32, 6, 92)",
                    color: "white",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <b className="m-0">New courses</b>
              <div className="d-flex">
                {/* className={`${s.contactUs} mb-0`} */}
                <p className={`${s.viewAll} m-0`}>View All <span> <img src="assets\images\blueRightarrow.png" alt="" /> </span></p>
                <i className="bi bi-caret-right-fill"></i>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Card
                imgSrc="assets\images\cardImg\gasturbin.png"
                title="Card title"
                text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                imgSrc="assets\images\cardImg\gasturbin.png"
                title="Card title"
                text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                imgSrc="assets\images\cardImg\gasturbin.png"
                title="Card title"
                text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Card
                imgSrc="assets\images\cardImg\gasturbin.png"
                title="Card title"
                text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                imgSrc="assets\images\cardImg\gasturbin.png"
                title="Card title"
                text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                imgSrc="assets\images\cardImg\gasturbin.png"
                title="Card title"
                text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-2">
            <OverviewCard />
            {/* <ContinueLearningCard /> */}
            {/* <ContinueLearningCard />
            <ReminderCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from 'react'
// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
// function index() {
//   return (
//     <div className="d-flex">
//        <Sidebar />
//        <div className="d-block w-100">
//          <Header />
//          <div className="row" style={{ margin: 0 }}>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default index
