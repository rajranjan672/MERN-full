import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import "./NewPlan.css"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const NewPlan = ({gett}) => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({
      title: "",
      description: "",
      method: "",
      category: ""
    })
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [category, setCategory] = useState('');
    // const [method, setMethod] = useState('');
    // const [photo, setPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleFileChange = (event) => {
  //   setPhoto(event.target.files[0]);
  // }; 

  // const sub = async (event) => {
  //   event.preventDefault()

  // const formData = new FormData();
  // formData.append('title', title);
  // formData.append('description', description)
  // formData.append('category', category)

  // formData.append('photo', photo)

  // try {
  //   const response = await axios.post("http://localhost:3001//api/actionPlans/createActionPlans", FormData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //   });
  //   handleClose()
  //   gett()
  //   title('')

  //   console.log(response.data)
  //   setSuccessMessage('User Added');
  //   setErrorMessage('');
  // } catch (error) {
  //   console.log('Error', error.response?.data || error.message);
  //   setErrorMessage('Error', + (error.response?.data || error.message));
  //   setSuccessMessage('');
  // }

  // };

  
  const sub = async(e) => {
    e.preventDefault()
     axios.post("http://localhost:3001/api/actionPlans/createActionPlans", data).then((resp) => {
       setData(resp.data)

        console.log('res',resp.data)
        

     }).then(() => {
      setData({
        title: "",
        description: "",
        method: "",
  
       })
       handleClose()
       //

       gett()
       console.log("subb")
     })
   
    
}

    const handleClickOpen = () => {
      setOpen(true);
      console.log("open")
    };
  
    const handleClose = () => {
      setOpen(false);
      console.log("close")

    };

  

  return (
    <>
    <div className='new'>
    <Button variant='contained' className='col-3 col-sm-3 col-md-2 co-lg-2 col-xl-2' onClick={handleClickOpen}>
        Add Recipie
      </Button>
    </div>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Your Recipie"}</DialogTitle>
        <DialogContent>
        <form className="row g-3 needs-validation" onSubmit={sub}>
        <div className="form-floating">
                      <input type="text" name='title' id="title" className="form-control" required
                        placeholder="title" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      <label className="form-label" htmlFor="title">Title</label>

                    </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='description' id="description" placeholder="name@example.com"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="description">Description</label>

          </div>
          <div className="form-floating">
          <select className="form-select" name='category' aria-label="Floating label select example" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} >
            <option selected value="">Open this select menu</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Maxician">Maxician</option>
          </select>
          <label htmlFor="floatingSelectGrid">Category</label>
          </div>
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>

          {/* <label htmlFor="photo">Upload Photo</label> */}
          {/* <input type="file" id='photo' name='photo' accept='image/jped, image/jpg, image/png' onChange={handleFileChange} required /> */}
          <div>
          <button type='submit' className='btn btn-primary mx-2'>Submit</button>
          <button onClick={handleClose}>Cancle</button>
          </div>
         
          </form>
        </DialogContent>
       
      </Dialog>
    </>
  )
}

export default React.memo(NewPlan)
