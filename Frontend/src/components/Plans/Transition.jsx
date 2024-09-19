import React from 'react'
import "./card.css"
import sweet from "../../Assets/sweet.jpeg"


const Transition = () => {
  return (
    <div className='container h-100'>
        <div className="row">
        <div className="col-2 image-container">
            <img src={sweet} alt="" className="image" />
            <div className="overlay">
                <h1 className='text-white'>hi</h1>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Transition