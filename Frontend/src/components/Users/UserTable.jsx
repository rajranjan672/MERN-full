import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const UserTable = ({ users, selectedCountry, onCountryChange, uniqueCountries }) => {
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        if (users.length) {
            const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name)); // Sort users by name
            setSortedUsers(sorted);
        }
    }, [users]);
    // Get unique countries for the dropdown

    return (
        <div className="container-fluid">
       <div className="row h-100 my-5">
        <div className="card col-sm-12 col-md-2 col-lg-2 h-100 p-2">
        <h3>Services</h3>

            <div className="card p-2 my-2">
            <h5 className="text-center">Food Recipies</h5>
            <button className="explore btn btn-info">Explore</button>
            </div>

            <div className="card p-2 my-2">
            <h5 className="text-center">Food Recipies</h5>
           
            </div>
           
        
        </div>
        <div className="card col-12 col-sm-12 col-md-10 col-lg-10 h-100 ">
            
            <FormControl className="my-2">
            <InputLabel id="demo-simple-select-label">{selectedCountry ? selectedCountry : 'All Countries'}</InputLabel>
            <Select className="col-2 my-2"  id="demo-simple-select"
            label="Country"
             labelId="demo-simple-select-label" value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}>
                <MenuItem value="">
                        <em>All Countries</em>
                    </MenuItem>
                {uniqueCountries.map((country, index) => (
                    <MenuItem key={index} value={country}>{country}</MenuItem>
                ))}
            </Select>
            </FormControl>
        

            <table className="table h-100 table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.state}</td>
                            <td>{user.country}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
        </div>
        </div>
 
    );
};

export default UserTable