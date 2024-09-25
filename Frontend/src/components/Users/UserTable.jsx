import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import "./Users.css"
import { useNavigate } from "react-router-dom";

const UserTable = ({ users, selectedCountry, onCountryChange, uniqueCountries }) => {
    const [sortedUsers, setSortedUsers] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        if (users.length) {
            const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name)); // Sort users by name
            setSortedUsers(sorted);
        }
    }, [users]);
    // Get unique countries for the dropdown

    return (
        <div className="container-fluid">
       <div className="row my-5">
        <div className="card col-sm-12 col-md-2 col-lg-2 h-100 p-2">
        <h3>Services</h3>

            <div className="card p-2 my-2">
            <h5 className="text-center">Food Recipies</h5>
            <button className="explore btn btn-info" onClick={() => navigate("/home")}>Explore</button>
            </div>

            <div className="card p-2 my-2">
            <h5 className="text-center">Food Recipies</h5>
           
            </div>
           
        
        </div>
        <div className="card card-custom col-12 col-sm-12 col-md-10 col-lg-10 ">
            
            <FormControl className="my-2">
            <InputLabel id="demo-simple-select-label">{selectedCountry ? selectedCountry : 'All Countries'}</InputLabel>
            <Select className="col-2 my-2 text-uppercase"  id="demo-simple-select"
            label="Country"
             labelId="demo-simple-select-label" value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}>
                <MenuItem value="">
                        <em>All Countries</em>
                    </MenuItem>
                {uniqueCountries.map((country, index) => (
                    <MenuItem  className="text-uppercase" key={index} value={country}>{country}</MenuItem>
                ))}
            </Select>
            </FormControl>
        
                <div className="card-body">
                    <div className="table-container">
                    <table className="table table-striped ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td className="text-uppercase">{user.name}</td>
                            <td>{user.email}</td>
                            <td className="text-capitalize">{user.state}</td>
                            <td className="text-uppercase">{user.country}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
                    </div>
               
                </div>
           
        </div>
            
        </div>
        </div>
 
    );
};

export default UserTable