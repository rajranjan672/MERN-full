import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SongCard from './SongCard';
import { Button, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import "./Song.css";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Song = () => {
    const [musicList, setMusicList] = useState([]);
    const [open, setOpen] = React.useState(false);

    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        image: null,
        audio: null,
    });

    useEffect(() => {
       

        fetchMusic();
    }, []);

    const fetchMusic = async () => {
        const res = await axios.get('http://localhost:3001/api/song/getsongs');
        setMusicList(res.data);
        console.log('songs', res.data)
    };

    const handleChange = (e) => {
        const { name, files, value } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('artist', formData.artist);
        data.append('image', formData.image);
        data.append('audio', formData.audio);

        await axios.post('http://localhost:3001/api/song/create', data);
        setFormData({ title: '', artist: '', image: null, audio: null });
        fetchMusic(); // Refresh the music list
    };

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
    <Button variant='contained' className='col-4 col-sm-3 col-md-2 co-lg-2 col-xl-2 m-2' onClick={handleClickOpen}>
        Add Song
      </Button>

      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h2 className='text-center'>{"Add Song"}</h2></DialogTitle>
        <DialogContent>
            <form onSubmit={handleSubmit} className='row g-3'>
                <div className="form-floating mb-2">
                {/* <label htmlFor="title" className="form-label">Title</label> */}
                <input type="text" name="title" id='title' className='form-control'
                  value={formData.title} placeholder='title' onChange={handleChange} required />
              <label htmlFor="title">Title</label>

                </div>
                <div className="form-floating mb-2">
                <input type="text" name="artist" id='artist' placeholder='artist' className='form-control'
                 value={formData.artist} onChange={handleChange} required />
              <label htmlFor="artist">Artist</label>

                </div>
                <label htmlFor="image">Image</label>

                <input type="file" name="image" accept="image/*" className='col-5'
                 onChange={handleChange} required />
                    
                    <label htmlFor="audio">Audio</label>
                <input type="file" name="audio" accept="audio/*" className='mb-2 col-5'
                 onChange={handleChange} required />

                <div>
                <button type="submit" className='btn btn-primary mx-auto'>Add Music</button>

                </div>
            </form>
        </DialogContent>
       
      </Dialog>





    </div>
            
            </div>
           
            <h2>Music List</h2>
            <div className="music-list">
                {musicList.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.artist}</p>
                            <img src={`http://localhost:3001/${item.imagePath}`} alt={item.title} width="100" />
                            <audio  controls>
                            <source src={`http://localhost:3001/${item.audioPath}`}  type="audio/mp3" />
                            </audio>
                        </div>
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