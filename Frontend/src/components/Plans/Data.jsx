import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";
import girl from "../../Assets/beautiful-girl-eating-vegetarian-lunch.png";
import { FitScreen } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import sweet from "../../Assets/sweet.jpeg"

const Data = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="data">
        <div className="container-fluid p-0">
          <div className="row m-0">
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
            <div className="col-11 col-sm-11 col-md-6 col-lg-4 girl mt-5">
              <img
                className="col-12 col-sm-10 col-md-12 col-lg-11"
                src={girl}
                height={FitScreen}
              />
            </div>

            <div className="col-10 col-sm-10 col-md-4 col-lg-4 girl mt-5 h-100">
              <div className="mt-5 pt-5 col-6">
                <h4 className="text-black">Spicy Food</h4>
                <p className="text-black-50">
                  Explore your fantacies of spicy foods
                </p>
                <a href="" className="text-primary">
                  Visit here <bi className="bi bi-arrow-right" />
                </a>
              </div>

              <div className="mt-5 ms-5 text-center">
                <h4 className="text-black">Spicy Food</h4>
                <p className="text-black-50 text-center">Asdgdbgd</p>
              </div>
            </div>
          </div>

          {/* <div className="row"> */}
          {/* breakfase */}
          <div className="row p-1">

          <div className="card col-12 m-0 my-2 py-2 ">
            
            <div className="d-flex justify-content-between">

              <h3 className=" justify-content-start">Breakfast</h3>
              <i className="bi bi-arrow-right alignt-end me-3" role="button" />
            </div>
            
          <div className="row justify-content-between py-2 px-1">
            
        <div className="col-3 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white text-center mt-5'>hi</h1>
            </div>
        </div>
        <div className="col-3 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white text-center mt-5'>hi</h1>
            </div>
        </div>
        <div className="col-3 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white text-center mt-5'>hi</h1>
            </div>
        </div>
        
        </div>
        </div>
        </div>


        {/* Lunch */}

        
        <div className="row">

        <div className="card col-12 m-0 py-2 my-4 my-0">
            
            <div className="d-flex justify-content-between">

              <h3 className=" justify-content-start">Breakfast</h3>
              <i className="bi bi-arrow-right alignt-end me-3" role="button" />
            </div>
            
          <div className="row justify-content-between pb-2 px-1">
            
        <div className="col-3 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white text-center mt-5'>hi</h1>
            </div>
        </div>
        <div className="col-3 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white text-center mt-5'>hi</h1>
            </div>
        </div>
        <div className="col-3 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white text-center mt-5'>hi</h1>
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

