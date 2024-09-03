import axios from "axios";
import React, { useState } from "react";


 const CreateExcersice = () => {
   const [state, setState] = useState({
    title: '',
    description:''
   });


  const changeHandler = (e) => {
    setState({[e.target.name]: e.target.value})
    
  };

  const submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3001/api/actionPlans/createActionPlans', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }


   return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input type="text" name="title" placeholder="title" value={state.title} onChange={changeHandler} />
          </div>
          <div>
            <input type="text" name="description" placeholder="description" value={state.description} onChange={changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
   )

//     </div>
//   );
 };

 export default CreateExcersice;

// import React, { Component } from "react";
// import axios from "axios";

// class PostForm extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       title: '',
//       description: '',
//     }
//   }

//   changeHandler = e => {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   submitHandler = e => {
//     e.preventDefault()
//     console.log(this.state)
//     axios.post('http://localhost:3001/api/actionPlans/createActionPlans', this.state)
//     .then(response => {
//       console.log(response)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   render() {
//     const {title, description} = this.state
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <input type="text" name="title" placeholder="title" value={title} onChange={this.changeHandler} />
//           </div>
//           <div>
//             <input type="text" name="description" placeholder="description" value={description} onChange={this.changeHandler} />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default PostForm;
