import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const UserTable = ({ users, selectedCountry, onCountryChange, uniqueCountries }) => {
    // Get unique countries for the dropdown

    return (
        <div className="container-fluid">
       <div className="row h-100 my-5">
        <div className="card col-sm-12 col-md-2 col-lg-2 h-100 p-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque ratione, accusamus quae harum nam praesentium! Labore sequi officiis est.</p>
            <button>H</button>
        
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
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
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