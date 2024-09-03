// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// const ExcersiceList = () => {
//     const [state, setState] = useState([])

//   useEffect(() => {
//     axios.get("http://localhost3001/api/actionPlans/getActionPlans")
//     .then(res => {
//         console.log("Getting data", res.data)
//         setState(res.data)
//     }).catch(err => console.log(err))
//   }, [])

//   const arr = data.map((data, index) => {
//     return (
//         <tr>
//             <td>{data.title}</td>
//             <td>{data.description}</td>

//         </tr>
//     )
//   })

//     return (
//         <div>
//             <p>This is ExcersiceList</p>
//         <table>
//             <tr>
//                 <th>TITLE</th>
//                 <th>TITLE</th>
//                 <th>TITLE</th>

//             </tr>
//         </table>
//         </div>
//     )
// }

// export default ExcersiceList;