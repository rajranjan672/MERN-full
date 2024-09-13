import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";
import girl from "../../Assets/beautiful-girl-eating-vegetarian-lunch.png";
import { FitScreen } from "@mui/icons-material";

const Data = () => {
  return (
    <>
      <div className="data mt-0">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-10 col-sm-10 col-md-5 col-lg-4 mt-5 pt-1 px-0">
              <h1 className="text-white">Explore Your Ideas Here with US</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                in, suscipit iure ullam aspernatur inventore quidem soluta!
                Quas, soluta aliquam?
              </p>
              <button className="bt">BUTTON</button>
            </div>
            <div className="col-11 col-sm-11 col-md-6 col-lg-4 girl mt-5">
              <img
                className="col-12 col-sm-10 col-md-12 col-lg-11"
                src={girl}
                height={FitScreen}
              />
            </div>

            <div className="col-10 col-sm-10 col-md-4 col-lg-4 girl mt-5 h-100">
              <div className="mt-5 pt-5 col-6">
                <h4 className="text-white">Spicy Food</h4>
                <p className="text-white-50">
                  Explore your fantacies of spicy foods
                </p>
                <a href="" className="text-white">Visit here <bi className= "bi bi-arrow-right" /></a>
              </div>

              <div className="mt-5 ms-5 text-center">
                <h4 className="text-white">Spicy Food</h4>
                <p className="text-white-50 text-center">Asdgdbgd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
