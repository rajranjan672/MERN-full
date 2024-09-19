import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";
import girl from "../../Assets/beautiful-girl-eating-vegetarian-lunch.png";
import { FitScreen, LocalDining, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import sweet from "../../Assets/sweet.jpeg";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    // title: "Company Performance",
    // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export const data1 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 5],
  ["Sleep", 7], // CSS-style declaration
];

export const options1 = {
  title: "My Daily Activities",
  pieHole: 0,
  is3D: false,
};

const Data = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="data">
        <div className="container-fluid p-0">
          <div className="row justify-content-between my-2 mx-auto">
            <div className="card card1 col-10 col-sm-5 col-md-3 col-lg-2 py-4 ">
              <p className="my-auto text-white"><LocalDining /> Recipies</p>
            </div>

            <div className="card card2 col-10 col-sm-5 col-md-3 col-lg-2 py-4">
              <p className="my-auto"><Person /> Users</p>
            </div>

            <div className="card card3 col-10 col-sm-5 col-md-3 col-lg-2 py-4">
              <p className="my-auto"><Person /> Users</p>
            </div>

            <div className="card col-2 card4 col-10 col-sm-5 col-md-3 col-lg-2 py-4">
              <h5>Recipies</h5>
            </div>
            
          </div>
          <div className="row m-0 h-25 justify-content-between">
            <div className="col-10 col-sm-10 col-md-5 col-lg-4 mt-5 pt-1 px-0">
              <h1 className="text-black">Explore Your Ideas Here with US</h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                in, suscipit iure ullam aspernatur inventore quidem soluta!
                Quas, soluta aliquam?
              </p>

              <button className="bt" onClick={() => navigate("/home")}>
                EXPLORE
              </button>
            </div>
            <div className="col-11 col-sm-11 col-md-6 col-lg-5 girl mt-2">
              <img
                className="col-12 col-sm-10 col-md-12 col-lg-11"
                src={girl}
                height={"70%"}
              />
            </div>

          
          </div>

          {/* <div className="row"> */}
          {/* breakfast */}
          <div className="row p-1">
            <div className="col-12 m-0 my-2 py-2 ">
              <div className="d-flex justify-content-between">
                <h3 className=" justify-content-start">Breakfast</h3>
                <i
                  className="bi bi-arrow-right alignt-end me-3"
                  role="button"
                />
              </div>

              <div className=" row justify-content-between">
                <div className="card col-12 col-sm-12 col-md-4 col-lg-3 image-container mb-4 py-2 px-2">
                  <img src={sweet} alt="" className="image" />
                  <div className="overlay">
                    <h1 className="text-white text-center mt-5">Indian</h1>
                  </div>
                </div>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-3 image-container mb-4 py-2 px-2">
                  <img src={sweet} alt="" className="image" />
                  <div className="overlay">
                    <h1 className="text-white text-center mt-5">Chinese</h1>
                  </div>
                </div>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-3 image-container mb-4 py-2 px-2">
                  <img src={sweet} alt="" className="image" />
                  <div className="overlay">
                    <h1 className="text-white text-center mt-5">Maxican</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between px-2">
          <h3>Food data</h3>

            <div className="card col-12 col-sm-12 col-md-12 col-lg-7 py-2 mb-3">
            <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
            </div>

            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 justify-content-end mb-3">
             <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data1}
      options={options1}
    />
            </div>
          </div>

          {/* Lunch */}

          <div className="row p-1">
            <div className="col-12 m-0 my-2 py-2 ">
              <div className="d-flex justify-content-between">
                <h3 className=" justify-content-start">Breakfast</h3>
                <i
                  className="bi bi-arrow-right alignt-end me-3"
                  role="button"
                />
              </div>

              <div className=" row justify-content-between">
                <div className="card col-8 col-sm-12 col-md-4 col-lg-3 image-container mb-4 py-2 px-2">
                  <img src={sweet} alt="" className="image" />
                  <div className="overlay">
                    <h1 className="text-white text-center mt-5">Indian</h1>
                  </div>
                </div>
                <div className="card col-8 col-sm-12 col-md-4 col-lg-3 image-container mb-4 py-2 px-2">
                  <img src={sweet} alt="" className="image" />
                  <div className="overlay">
                    <h1 className="text-white text-center mt-5">Chinese</h1>
                  </div>
                </div>
                <div className="card col-8 col-sm-12 col-md-4 col-lg-3 image-container mb-4 py-2 px-2">
                  <img src={sweet} alt="" className="image" />
                  <div className="overlay">
                    <h1 className="text-white text-center mt-5">Maxican</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Data;
