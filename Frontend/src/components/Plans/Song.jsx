import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SongCard from './SongCard';
import { Button, Card, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import "./Song.css";
import { FitScreen, FitScreenRounded } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Song = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
     const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        gett()
    }, [setData])

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  }; 

  const sub = async (event) => {
    event.preventDefault()

  const formData = new FormData();
  formData.append('title', title);
  formData.append('articleImage', photo)

  try {
    const response = await axios.post("http://localhost:3001/api/article/create", formData, {
     
    }).then(() => {
      gett()
      
    })
    handleClose()
    // gett()
    

    console.log(response.data)
    // setSuccessMessage('User Added');
    // setErrorMessage('');
  } catch (error) {
    console.log('Error', error.response?.data || error.message);
    // setErrorMessage('Error', + (error.response?.data || error.message));
    // setSuccessMessage('');
  }

  };

const gett = async() => {
    let ress = await axios.get("http://localhost:3001/api/article/");
    setData(ress.data)
    console.log('img',ress.data)
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
        <div className='container-fluid h-100'>
            <div className='row'>

            <div>
    <Button variant='contained' className='text-capitalize m-2' onClick={handleClickOpen}>
        New Article
      </Button>

      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h2 className='text-center'>{"Add Article"}</h2></DialogTitle>
        <DialogContent>
            <form onSubmit={sub} encType='multipart/form-data' className='row g-3'>
                <div className="form-floating mb-2">
                {/* <label htmlFor="title" className="form-label">Title</label> */}
                <input type="text" name="title" id='title' className='form-control'
                   placeholder='title' onChange={(e) => setTitle(e.target.value)} required />
                   
              <label htmlFor="file">Title</label>
              <input type="file" photo="articleImage"
                onChange={handleFileChange}
              />
                </div>
                {/* <div className="form-floating mb-2">
                <input type="text" name="artist" id='artist' placeholder='artist' className='form-control'
                  onChange={handleChange} required />
              <label htmlFor="artist">Artist</label>

                </div> */}

                {/* <label htmlFor="image">Image</label>

                <input type="file" name="image" accept="image/*" className='col-5'
                 onChange={handleChange} required />
                    
                    <label htmlFor="audio">Audio</label>
                <input type="file" name="audio" accept="audio/*" className='mb-2 col-5'
                 onChange={handleChange} required /> */}

                <div>
                <button type="submit" className='btn btn-primary mx-auto'>Add Articles</button>

                </div>
            </form>
        </DialogContent>
       
      </Dialog>





    </div>
            
            </div>
           <h2>Articles</h2>

           <div className="row">

                {data.map((item, index) => {
                    return (
                      <>

                      <div className="col-10 col-sm-5 col-md-5 col-lg-3 p-0 mx-auto" role='button'>
                        <Card className='d-flex mx-2' >
                        <img className='w-100 ' src={`http://localhost:3001/uploads/${item.articleImage}`} alt="" height={"280px"} />

                        </Card>
                        <p className='text-bold text-center my-2'>{item.title}</p>
                      </div>
                      
                        
                      


                      </>

                    )
                })}
                {/* {musicList.map(music => (
                    <SongCard key={music._id} music={music} />
                ))} */}
            </div>
           </div>
            
    );

}

export default Song