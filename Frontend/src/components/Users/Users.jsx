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
        <div className="col-2 card h-100 my-2">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            neque reprehenderit sequi modi hic nam explicabo dolor iure
            
            repudiandae recusandae assumenda, soluta provident ea voluptatum
            nostrum dolores ex illo. Laborum, magni. Recusandae, ullam beatae!
            Amet placeat et sunt consequatur ducimus natus deserunt cumque atque
           
            
          </p>
        </div>
          
      
      <div className="col-10">


        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={item.id} >
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
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
