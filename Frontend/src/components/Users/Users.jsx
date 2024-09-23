import React, { useState } from "react";
import UsersCustom from "../Custom hooks/UsersCustom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import UserTable from "./UserTable";

const Users = () => {
  const { users, loading, error } = UsersCustom();
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    const filteredUsers = selectedCountry
        ? users.filter(user => user.country === selectedCountry)
        : users;

        const uniqueCountries = [...new Set(users.map(user => user.country))];

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching users: {error.message}</p>}
            <UserTable
                users={filteredUsers} 
                selectedCountry={selectedCountry} 
                onCountryChange={handleCountryChange} 
                uniqueCountries={uniqueCountries} // Pass all unique countries to the table
            />
        </div>
    );
    
  
};

export default Users;
