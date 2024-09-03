
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { Fragment } from "react";

import { useNavigate, BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

import Error from "./Router/Error";
import Navbar from "./Router/Navbar";
import "./Router/router.css"
import axios from 'axios';
import Register from './components/Login/Register';
import "@fontsource/roboto";
import "../src/index.css";
import "./App.css";
import UpdateBook from './components/Plans/UpdateBook';
import Footer from './components/Plans/Footer';
const LazyQuiz = React.lazy(() => import('./components/Plans/QUIZ'));
const LazyProfile = React.lazy(() => import('./Router/Profile'))
const LazyIntegration = React.lazy(() => import('./components/Plans/Plans'))
const About = React.lazy(() => import('./Router/About'))
const Login = React.lazy(() => import('./components/Login/Login'))

const DUMMY_EXPENSES = [
  { id: "e1", title: "Groceries", amount: "20.40", date: new Date() },
  {
    id: "e2",
    title: "Fashion",
    amount: "40.40",
    date: new Date(2022, 6, 23),
  },
  { id: "e3", title: "Health", amount: "10.40", date: new Date(2020, 6, 24) },
  {
    id: "e4",
    title: "Digital",
    amount: "10.40",
    date: new Date(2022, 6, 25),
  },
];



function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
const a = axios.defaults.withCredentials = true
const [auth, setAuth] = useState(false)
const [data, setData] = useState([])
const navigate = useNavigate()

useEffect(() => {
gett()
}, [setData])


const gett = async(req,res) => {
try {
  await axios.get("http://localhost:3001/api/user/get", {withCredentials: true}).then((ress) => {
  setData(ress.data.user)
  console.log(ress.data.user.name)
}).then(() => {
  setAuth(true)
  console.log(auth)

})

} catch {
  // navigate("/login")
}

}



  return (
    
    <>
    <div className='app'>

    <div>
      <Navbar data ={data}/>
      
</div>
      <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" defaults element={<React.Suspense fallback='Loading...'>
          <LazyIntegration user ={data} />
        </React.Suspense>} />
        <Route path='/login' element={<React.Suspense fallback='Loading...'>
          <Login />
        </React.Suspense>}  />
        <Route path='/edit-plan/:id' element={<React.Suspense fallback='Loading...'>
          <UpdateBook  />
        </React.Suspense> } />

        <Route path="/profile/:name" element={<React.Suspense fallback='Loading...'>
          <LazyProfile />
        </React.Suspense>}  />
        <Route path="/quiz" element={<React.Suspense fallback='Loading...'>
          <LazyQuiz />
        </React.Suspense>}  />
        <Route path="/about" element={<React.Suspense >
          <About />
        </React.Suspense>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuth= {setAuth} auth ={auth}/>} />

        <Route path="/*" element={<Error />} />
        
        
      </Routes>


    </div>
    

    {/* {plans.map((plan) => {
 
          {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => {
            return(
              <tr key={plan.id}>
                <td >{plan.title}</td>
                 <td>{plan.description}</td> 
              </tr>
            
          )})}
        </tbody>
      </table> */}


      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => {
            return(
              <tr key={plan.Id}>
                <td>{plan.Name}</td>
                <td>{plan.Address}</td>
              </tr>
            
          )})}
        </tbody>
      </table> */}
      

     

     
      {/* <UseState1 />

      <UseState2 /> */}
      {/* <div>
        <button onClick={counterHandler}>Count</button>
        {count}
      </div> */}
        {/* <NewExpense onAddEpenses={addExpenseHandler} />
      <Expenses expenses={expenses} />   */}
     <>
       {/* <Navbar /> */}
       <br/>
       {/* <Routes>
       <Route path="/" exact element= {<ExcersiceList />} />
       <Route path="/edit/:id" exact element={ <EditExcersice />} />
       <Route path="/create" exact element={<CreateExcersice />} />
       <Route path="/user" exact element={<CreateUser />} />
       </Routes> */}
     </>
     <Outlet />
    </>
  );
}

export default App;
