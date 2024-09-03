// import { Button, Form, FormControl } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import {useState} from 'react';
// import axios from "axios";

// function CreatePost() {
//     const [post, setpost] = useState({
//         title: "",
//         description: "",
//     });
//     const navigate = useNavigate();

//     const handleChange = (event) => {

//         setpost(event.target.value)
//     }

//     const SubmitHandler = (event) => {
//         event.preventDefault();

//         axios.post('/http://localhost:3001/api/actionPlans/createActionPlans', post).then(res => console.log(res)).catch(err => console.log(err));
//     }

//   return (
//     <div>
//       <h2>Create Post</h2>
//     <form>
//         <Form.Group>
//             <Form.Control type='text' name="title" placeholder="Title" onChange={handleChange} value={post.title} />
//             <Form.Control type='text' name="description" placeholder="Description" onChange={handleChange} value={post.description} />
//             </Form.Group>
//             <Button variant="outline-success" onClick={SubmitHandler}>Create Post</Button>
//     </form>
//       <Button onClick={() => navigate(-1)}>Back</Button>
//     </div>
//   );
// }

// export default CreatePost;
