import React, { useEffect, useState } from 'react'
import "../Login/register.css"
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { Title } from '@mui/icons-material'
import Swal from 'sweetalert2'

const Register = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [countriesStates, setCountriesStates] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate()
    
    const Login =() => {
      navigate("/login")
    }

 
    useEffect(() => {
      const fetchCountriesStates = async () => {
          const response = await axios.get('http://localhost:3001/api/countries-states');
          setCountriesStates(response.data);
          console.log(response.data)
      };
      fetchCountriesStates();
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = { name, email, password, country, state };
      try{
        if (!name.trim() || !email.trim() || !password || !country || !state) {
          setError('All fields are required');
          return;
      }

      await axios.post('http://localhost:3001/api/user/register', userData);
      
        Swal.fire({title: "User added",
          text: "You can login now",
          timer: 2000,
          icon: "success"
        })
        navigate("/login")
      
      
    } catch (error) {
      if (error.response) {
          console.error('Error response:', error.response.data);
          Swal.fire({icon: "error", title: "User already exist"})
      } else {
          console.error('Error:', error.message);
      }
  }
      
      
  };


  return (
    <>
    <div className='register  gradient-form h-100'>
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black my-top">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-2">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"  className='form-control' />
                  <label className="form-label" htmlFor="name">Name</label>


                  </div>
                  <div className="form-floating mb-2">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"  className='form-control' />
                  <label className="form-label" htmlFor="email">Email</label>

                  </div>
                  <div  className='form-floating mb-2'>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className='form-control'  />
                  <label className="form-label" htmlFor="password">Password</label>

                  </div>
                  <div className="form-floating mb-2">
                  <select className='form-select' value={country} onChange={(e) => { 
                setCountry(e.target.value); 
                setState(''); 
            }} >
                <option value="">Select Country</option>
                {Object.keys(countriesStates).map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>

                  </div>

                  <div className="form-floating mb-2">
                  <select className="form-select"  value={state} onChange={(e) => setState(e.target.value)} disabled={!country}>
                <option value="">Select State</option>
                {country && countriesStates[country].map(state => (
                    <option key={state} value={state}>{state}</option>
                ))}
            </select>
                  </div>
           
            
                  <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                      {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={Login}>Login</button>
                    </div>
        </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
     
        </div>
    </div>
    </div>
    </div>
    </div>
   
  </>
  )
}

export default React.memo(Register)