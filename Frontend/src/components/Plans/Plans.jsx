
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// import '../Plans/plans.css';
import axios from 'axios';
import { Alert, autocompleteClasses, Avatar, CardActionArea, Collapse, createTheme, CssBaseline, FormControlLabel, FormGroup, IconButton, Snackbar, Switch, ThemeProvider, Tooltip } from '@mui/material';
import NewPlan from "../Login/NewPlan"
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useCallback } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import '../Plans/card.css'
import { AltRoute, ExpandMoreOutlined, ExpandMoreRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
// media: {
//   height: 70,
//   paddingTop: '56.25%', // 16:9
// },
 const Plans = ({user}) => {

  
    const [plans, setPlans] = useState([])
    const [ query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [visible, setVisible] = useState(4);
    const [isdark, setIsdark] = useState(false);
    const [data, setData] = useState({email: ''})
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredData, setFilteredData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0)


    const navigate = useNavigate()
    


const darkTheme = createTheme({
  palette: {
    mode: isdark ? 'dark' : 'light',
  },
});

const handleChange =(event) => {
  setIsdark(event.target.checked)
}


    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    // const avatarBgColor = (plan) => {
    //   if (plan.title.charAt(0) === "R" || plan.title.charAt(0) === "r" )  {
    //     return 'red';
    //   }
    //   if (plan.title.charAt(0) === "M" || plan.title.charAt(0) === "m") {
    //     return '#f542e3';
    //   }
     
    //  if (plan.title.charAt(0) === "S" || plan.title.charAt(0) === "s") {
    //     return 'green';
    //   }
    //    if (plan.title.charAt(0) === "A" || plan.title.charAt(0) === "a") {
    //     return 'orange';
    //   }
    //    else {
    //     return 'blue';
    //   }
    // };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/api/actionPlans/getActionPlans`);
          setData(res.data);
          setFilteredData(res.data); // Initialize filteredData with fetched data
        } catch (error) {
          navigate('/login')
        }
      };
  
      fetchData();
    }, []);


  const showMorePlans = () => {
    setVisible(preValue => preValue +4)
  }



  const getplans = async() => {
    
     try{ const res = await axios.get(`http://localhost:3001/api/actionPlans/getActionPlans`);
      setPlans(res.data)
      setFilteredData(res.data); // Initialize filteredData with fetched data

      console.log(res.data)
     }
     catch {
      navigate("/login")
     }
   
  }


  const handlechange = useCallback(
    (event, value) => {
      console.log("pagebutton")
      setPage(value)
    }
  ) 
   const edit = useCallback(() => {
    console.log("edit button")
   }, []) 
 

  

  const  deletee = (id) => {
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'question',
  iconColor: "#d33",
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Yes, delete it!'
}).then(async(result) => {
  if (result.isConfirmed) {
 const result = await axios.delete('http://localhost:3001/api/actionPlans/deleteActionPlan/'+ id)
    .then((result) => {
      getplans()
    enqueueSnackbar('Plan Deleted!', { variant:'success' });

    }).catch (() => {
      enqueueSnackbar("Something went wrong", {variant: 'error'})
    })


   
  }
})
   
  }

  const categories = ['All', 'Indian', 'Chinese', 'Maxician'];

  const handleCategoryChange = (category, index) => {
    setSelectedCategory(category);
    setSelectedIndex(index)
    if (category === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.category === category);
      setFilteredData(filtered);
    }
  };

  const getButtonStyle = (index) => {
    return {
      backgroundColor: selectedIndex === index ? '#e64ca5': '#859174',
      color: 'white',
      margin: '5px'
    }
  }

  // Example categories (these might be dynamic based on your data)


  return (
    <>
    <div className="plans">
    <div className='container-fluid'>
      <div className='row'>
      {/* <FormGroup className='col-2'>
<FormControlLabel control={<Switch checked={isdark} onChange={handleChange} color='error'/>}
        label={`${isdark? 'Dark Mode':'Light Mode'}`} />

</FormGroup> */}


    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
     
{/* <h3>{user.name}</h3> */}
    <div className='d-flex justify-content-center'>
      {categories.map((category, index) => (
        <button className='btnn bg-light-green'
          key={index}
          onClick={() => handleCategoryChange(category, index)}
          style={getButtonStyle(index)}
        >
          {category}
        </button>
      ))}
    </div>

    <NewPlan gett={getplans} />
    <div className='inputss'>
    <input className='inputt' type="text"  placeholder='Search plans' onChange={event => {setQuery(event.target.value)}} />
    </div>
    <div className='container-fluid'>
                <div className="row">
                
     {filteredData.map((plan) => 
            (
       <Card key={plan.id} className='car   col-10 col-sm-5 col-md-5 col-lg-3 my-1 py-1 mx-2 '>
        {/* <Avatar className='text-uppercase' sx={{ bgcolor: avatarBgColor(plan) }} >
            {plan.title[0]}
        
          {/**/}
          {/* <img src={`http://localhost:3001/images/${plan.photo}`} alt='User' style={{width: '70&', height: '100px', margin: '10px'}} />  */}
          
          <Typography gutterBottom variant="h5" component="div" className='title text-capitalize'>
            {plan.title}
            <Link to={`/plandetails/` + plan._id}>
            <Tooltip title="details">
            <i className="bi bi-eye float-end" style={{color: 'white'}} role='button'></i>

            </Tooltip>

            </Link>
          </Typography>
          <Typography variant='body2'>Country: {plan.category}</Typography>
          <Typography variant="body2" >
            {plan.description}
          </Typography>
          <div className='btnn'>
           <Tooltip title="Delete" arrow> 
            
          <button className='delete' onClick={() => deletee(plan._id)}>
          <i class="bi bi-trash"></i>

          </button>
           </Tooltip> 
          <div className='edit'>
          {/* <EditPlan  id={plan._id} title={plan.title} description={plan.description} /> */}

          <Tooltip title="edit">

          <button className='editbtn'>
         
         <Link to={`/edit-plan/` + plan._id}>
         <i className="bi bi-pencil-square">
       </i>

         </Link>
      
          </button>
          </Tooltip>
          
          </div>
          
          </div>
      
      
      
       
    </Card>
    
    ))}
    <div className='text-center'>
  <Button color='secondary'  variant='contained' onClick={showMorePlans}>Load More</Button>
  </div>
<Pagination 
      count={10}
      defaultPage={page}
       color="primary" 
      onChange={handlechange}
      />

  </div>
    </div>
    </ThemeProvider>
    </div>
    </div>
</div>
  </>
  )
}

function IntegrationNotistack({user}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Plans user = {user} />
    </SnackbarProvider>
  );
}

// export default IntegrationNotistack
export default React.memo(IntegrationNotistack)
