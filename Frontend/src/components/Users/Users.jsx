import React, { useState } from "react";
import UsersCustom from "../Custom hooks/UsersCustom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Users = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  
  const { users } = UsersCustom();
  
  console.log("u", users);

  return (
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2  h-100 my-2">
          <div className="card">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            neque reprehenderit sequi modi hic nam explicabo dolor iure
            
            repudiandae recusandae assumenda, soluta provident ea voluptatum
            nostrum dolores ex illo. Laborum, magni. Recusandae, ullam beatae!
            Amet placeat et sunt consequatur ducimus natus deserunt cumque atque
           
            
          </p>
          </div>
        
        </div>
          
      
      <div className="card col-12 col-sm-12 col-md-10 col-lg-10">

<table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>


            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={item.id} >
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.state}</td>
                  <td>{item.country}</td>


                </tr>
              );
            })}
          </tbody>
        </table>
</div>
        
      </div>
      </div>
  );
};

export default Users;
