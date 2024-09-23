const UserTable = ({ users, selectedCountry, onCountryChange, uniqueCountries }) => {
    // Get unique countries for the dropdown

    return (
        <div className="container-fluid h-100">
       <div className="row h-100 my-5">
        <div className="card col-sm-12 col-md-2 col-lg-2 h-100">
            <button>H</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque ratione, accusamus quae harum nam praesentium! Labore sequi officiis est.</p>
        </div>
        <div className="card col-12 col-sm-12 col-md-8 col-lg-9 h-100">
        <select className="col-2 my-2" value={selectedCountry} onChange={(e) => onCountryChange(e.target.value)}>
                <option value="">All Countries</option>
                {uniqueCountries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>

            <table className="table h-100">
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