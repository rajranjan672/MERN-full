// import React from 'react'
// import {NavLink} from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import "./router.css"

const Navbar = ({setAuth,auth, data}) => {
  const [isNav, setIsNav] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
//   const [data, setData] = useState([])
  const navigate = useNavigate()
 

  const logout = async(e) => {
      
    e.preventDefault()
     axios.get("http://localhost:3001/api/user/logout", {withCredentials : true}).then((resp, rej) => {
    navigate("/login")
    // setAuth(false)
   
        if(!resp) {
        alert('please enter valid email or password')
        }

     }).then(() => {
      // {props.user()}
      // navigate("/login")
     }) 

}


const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}

  return (


    <>
    
      <div className='navbar '>
        
      <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon className='menuicon text-white'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'} d-flex justify-content-between`}>
         <ul >
             <li><NavLink to="/home" className=" nav-item" onClick={handleShowNavbar}>Home</NavLink></li>

             <li><NavLink to="/about" className=" nav-item" onClick={handleShowNavbar}>About Us</NavLink></li>
             <li><NavLink to="/quiz" className=" nav-item" onClick={handleShowNavbar}>QUIZ</NavLink></li>
             <li class="nav-item dropdown"> <a class="nav-link" href="#">  Hover me  </a>
		    <ul class="dropdown-menu">
			  <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
			  <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
			  <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
		    </ul>
		</li>

             </ul>
            <ul className='d-flex '>

         </ul>
         </div>

             <ul>
    <div className="dropdown" style={{float: "right"}}>
  <button className="dropbtn">{data.name}</button>

  <div className="dropdown-content">
   <button type="button" className="btn btn-warning" onClick={logout}>Logout<i className="bi bi-arrow-{data.username}"></i></button>
    <NavLink to="/profile/none" className="profile"><i className="bi bi-person-circle"> Profile</i></NavLink>
     <a href="#">Link 3</a> 
  </div>
</div>
    </ul>
     </div> 
    
     </>

  )



}
  


export default React.memo(Navbar)
