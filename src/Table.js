//import { Col, Row } from 'react-bootstrap';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import BasicSelect from './Upload';
import axios from 'axios';//import AdvancedExample from './Pagination';
import { Button } from '@mui/material';
import Footer from './Footer';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { Backdrop } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';


function BasicExample() {
  const [data, setData] = useState([]);
  const [a, setA] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [del, setDel] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/Projects/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    // boxShadow: 24,
    p: 4,
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set backdrop color to semi-transparent black
    },
  };

  let array = [];
  
  for (let key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
      array.push(a[key])
    }
  }
  console.log(array)
   let array1 = [];
        for(let i=0;i<array.length;i++){
          array1 = Object.keys(array[i])
          break;
        }
  console.log(array1)

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewClick = async(id) => {
    // Handle view button click for item with specified ID
    const response = await fetch(`http://localhost:3000/Projects/${id}`);
    const view =  await response.json();
    setOpen(true);
    setA(view)
    console.log(view);
    console.log(id);   
    return view;
  };

  const handleDeleteClick = (id) => {
    // Handle delete button click for item with specified ID
    if (window.confirm('Are you sure you want to delete this item?')) {
      // Make DELETE request to server using fetch
      fetch(`http://localhost:3000/Projects/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            // If deletion is successful, remove item from data state
            setDel(del.filter(item => item.id !== id));
            alert('Item deleted successfully.');
            window.location.reload();
          } else {
            // If deletion fails, show error message
            alert('Unable to delete item. Please try again later.');
          }
        })
        .catch(error => {
          console.error(error);
          alert('An error occurred while deleting the item. Please try again later.');
        });
    }
  };


  console.log(data)
  // var file_path = 'C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\{otherValues.Filename}'

 
  return (
    <>
      {/* <div>
      <p>ID of the last value: {valueId}</p>
      <p>Other values: {otherValues}</p>
    </div> */}
      <TableContainer component={Paper}>
        <Table aria-label="a dense table" size="medium">
          <TableHead >
            <TableRow style={{ backgroundColor: "#F9F9FA" }}>         
             <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600  }} >Project </TableCell>
             <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }} >Description</TableCell>
             <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }} >Ticket Type</TableCell>
             <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600}} >File Type</TableCell>
             <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 , width:200 }} >Clustering Algorithms</TableCell>             
             <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600, paddingLeft:5 , width:200 }}
              > Actions</TableCell>             
              {/* <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }}>Sys_updated</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>

            {/* {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={index % 2 ? { background: "#f9f9fa" } : { background: "white" }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: "0.8rem" }}>
                  {row.Number}&nbsp;
                </TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Priority}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Sys_created_on}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Opened_at}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Caller_id}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.State}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Category}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Assignment_grp}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Short_description}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Assigned_to}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Sys_updated}</TableCell>
              </TableRow>
            ))} */}
            {
            data.map((row, index) => (
              <TableRow key={index} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={index % 2 ? { background: "#F9F9FA" } : { background: "white" }}>

                    <TableCell key={row.Projectname} sx={{ fontSize: "0.8rem", color:"#1e1d1d" }}>{row.Projectname}</TableCell>
                    <TableCell key={row.Description} sx={{ fontSize: "0.8rem" , color:"black"}}>{row.Description}</TableCell>
                    <TableCell key={row.Tickettype} sx={{ fontSize: "0.8rem", color:"#757576"}}>{row.Tickettype}</TableCell>
                    <TableCell key={row.Filetype} sx={{ fontSize: "0.8rem", color:"#757576" }}>{row.Filetype}</TableCell>
                    <TableCell key={row.Filetype} sx={{ fontSize: "0.8rem" , color:"#757576", }}>{row.Clusteringalgorithms}</TableCell>
                    <TableCell >
                      <Button
                      //  onClick={() => handleViewClick(row.id)}
                      component={Link} to="/projectstudio"
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 24 16">
                            <g id="layer1" transform="translate(-3 -296.063)">
                              <path id="path838" d="M15,296.063a12.015,12.015,0,0,0-12,12H5a10,10,0,0,1,20,0h2A12.015,12.015,0,0,0,15,296.063Zm0,8a4,4,0,1,0,4,4A4,4,0,0,0,15,304.063Z" fill="#7a7a7a"/>
                            </g>
                          </svg>
                       </Button>

  
                        <Button onClick={() => handleDeleteClick(row.id)}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="18.093" height="16.342" viewBox="0 0 18.093 20.342">
                            <g id="bag-delete-svgrepo-com" transform="translate(-2.453 -1.658)">
                              <path id="Path_13" data-name="Path 13" d="M3.489,10.424A3,3,0,0,1,6.459,7H17.541a3,3,0,0,1,2.97,3.424l-1.02,7.141A4,4,0,0,1,15.531,21H8.469a4,4,0,0,1-3.96-3.434Z" fill="none" stroke="#7a7a7a" stroke-width="2"/>
                              <path id="Path_14" data-name="Path 14" d="M9,3,7.211,6.578" fill="none" stroke="#7a7a7a" stroke-linecap="round" stroke-width="2"/>
                              <path id="Path_15" data-name="Path 15" d="M15,3l1.789,3.578" fill="none" stroke="#7a7a7a" stroke-linecap="round" stroke-width="2"/>
                              <path id="Path_16" data-name="Path 16" d="M9.5,12l5,5m0-5-5,5" fill="none" stroke="#7a7a7a" stroke-linecap="round" stroke-width="2"/>
                            </g>
                          </svg>

                        </Button>
                    </TableCell>
              </TableRow>
            ))
          }
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"


      >
        <Box sx={style}>

        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-17px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular'}}>Project Name</label>
                </Grid>
                <Grid item xs={4} >
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[0]}</label>
               </Grid>               
        </Grid>

        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-15px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular',}}>Description</label>
                </Grid>
                <Grid item xs={4}>
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[1]}</label>
             </Grid>               
        </Grid>

        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-15px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular',}}>Ticket Type</label>
                </Grid>
                <Grid item xs={4}>
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[2]}</label>
              </Grid>               
        </Grid>

        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-15px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular',}}>File Name</label>
                </Grid>
                <Grid item xs={4}>
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[3]}</label>
                </Grid>               
        </Grid>


        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-15px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular',}}>File GUID Name</label>
                </Grid>
                <Grid item xs={4}>
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[4]}</label>
             </Grid>               
        </Grid>

        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-15px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular',}}>File Type</label>
                </Grid>
                <Grid item xs={4}>
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[5]}</label>
             </Grid>               
        </Grid>

        <Grid container alignItems="center" spacing={3} sx={{marginTop: '-15px'}}>
                <Grid item xs={4}>
                  <label style={{ fontFamily: 'SourceSansPro-Regular',}}>Clustering Algorithms</label>
                </Grid>
                <Grid item xs={8}>
                <label style={{ fontFamily: 'SourceSansPro-Regular', width:"400px"}}>{array[6]}</label>
      </Grid>               
        </Grid>

        </Box>
      </Modal>
      <br/>
      <br/>
    </>
  );
}

export default BasicExample;