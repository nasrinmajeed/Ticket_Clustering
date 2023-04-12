import { Container } from "@mui/system";
// import Button from "@restart/ui/esm/Button";
import Button from '@mui/material/Button';
import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigationbar from './Navigationbar';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from "react";
import axios from 'axios';//import AdvancedExample from './Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';


export default function DataCleaning() {
  const [status, setStatus] = useState('pending');
  const [lemstatus, setLemstatus] = useState('pending');
  const [open, setOpen] = useState(false);
  const [numb, setNumb] = useState(false);
  const [posstatus, setPosstatus] = useState('pending');
  const [rowColor, setRowColor] = useState('#FFDFD9');
  const [rowColo, setRowColo] = useState('#FFDFD9');
  const [rowCol, setRowCol] = useState('#FFDFD9');

  const handleClose = (value) => {
    setOpen(false);
    // setNumb(value);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [filepath, setPath] = useState('');
  const [clean, setClean] = useState(null);
  const [value, setValue] = useState(false);
  const [lemValue, setLemvalue] = useState('');
  const [pos, setPos] = useState('');

  const handleDrop = async (event) => {
    setSelectedValue(event.target.value);
  }

  const handleLemdrop = async (event) => {
    setLemvalue(event.target.value);
  }

  const handlePosvalue = async (event) => {
    setPos(event.target.value);
  }

  const handleClean = async (event) => {
    setOpen(true);
  };


  const handleConfirmation = async (value) => {
    setRowColor('#FFDFD9');
    setStatus('progress');
    setOpen(false)
    setNumb(value)
    try {
      const response = await fetch('http://localhost:5000/cleandata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          file_path: filepath,
          name: selectedValue,
          removenumbersinbetween: numb,
        })
      })
      if (response.ok) {
        setRowColor('#c5e8cc');
        setSelectedValue('');
        setStatus('completed'); // update row color on success
      }

    }
    catch (error) {
      setStatus('pending');
      // console.error(error);
    }
  }

console.log(numb)
  const [lem, setLem] = useState(null);

  const handleLem = async () => {
    setLemstatus('progress');
    setRowColo('#FFDFD9');
    try {
      const response = await fetch('http://localhost:5000/lemmatize_csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          file_path: filepath,
          name: lemValue,
        })
      })
      if (response.ok) {
        setRowColo('#c5e8cc');
        setLemvalue('')
        setLemstatus('completed'); // update row color on success
      }
    }
    catch (error) {
      setLemstatus('pending');
      // console.error(error);
    }
  };


  const handlePos = async () => {
    setPosstatus('progress');
    setRowCol('#FFDFD9');

    try {
      const response = await fetch('http://localhost:5000/postags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          file_path: filepath,
          name: pos,
        })
      })
      if (response.ok) {
        setRowCol('#c5e8cc');
        setPos('')
        setPosstatus('completed'); // update row color on success
      }

    }
    catch (error) {
      setPosstatus('pending');
      // console.error(error);
    }
  };

  const [cnames, setCnames] = useState('');
  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);

  useEffect(() => {
    Clean();
  }, [cnames]);

  let array = [];

  for (let key in cnames) {
    if (Object.hasOwnProperty.call(cnames, key)) {
      array.push(cnames[key])
    }
  }
  // console.log(array)
  let array1 = [];
  for (let i = 0; i < array.length; i++) {
    array1 = Object.keys(array[i])
    break;
  }
  // console.log(array1)



  async function Clean() {
    const response1 = await axios.get('http://localhost:5000/get_column_names')
      .then(response1 => {
        setCnames(response1.data)
        // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
      }
      )

    const response2 = await axios.get('http://localhost:5000/get_filepath')
      .then(response2 => {
        setPath(response2.data)
        // console.log(response2)
        // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
      }
      )
  }
  // console.log(cnames)

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/* <Navigationbar /> */}
      <Container>
        <Row >
          <Col></Col>
          <Col className="data-clean-col">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3507" data-name="Group 3507" transform="translate(-0.147 -0.231)">
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(0.147 0.231)" fill="#2fac26" />

              <g id="Group_3516" data-name="Group 3516">
              <path id="Path_12377" data-name="Path 12377" d="M17.826,3.06A10.442,10.442,0,0,0,3.059,17.827,10.442,10.442,0,1,0,17.826,3.06ZM10.442,19.477a9.033,9.033,0,1,1,9.033-9.033A9.044,9.044,0,0,1,10.442,19.477Z" transform="translate(9 9)" fill="#fff" />
                 </g>    
                <g id="Group_3519" data-name="Group 3519" transform="translate(4.147 5.885)">
              <g id="Group_3518" data-name="Group 3518">
              <path id="Path_12378" data-name="Path 12378" d="M113.583,144.95a2.285,2.285,0,0,0-3.233,0l-3.64,3.64-1.148-1.148a2.286,2.286,0,1,0-3.233,3.233l2.764,2.764a2.286,2.286,0,0,0,3.233,0l5.257-5.257A2.289,2.289,0,0,0,113.583,144.95Zm-1,2.237-5.257,5.257a.877.877,0,0,1-1.24,0l-2.764-2.764a.877.877,0,0,1,1.24-1.24l1.646,1.646a.7.7,0,0,0,1,0l4.138-4.138a.877.877,0,0,1,1.24,1.24Z" transform="translate(-92.66 -135.28)" fill="#fff" />
                </g>
                </g>
                </g>       
                </svg>

                <div className="rectangle2"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3507" data-name="Group 3507" transform="translate(-0.147 -0.231)">
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(0.147 0.231)" fill="#2fac26" />

              <g id="Group_3516" data-name="Group 3516">
              <path id="Path_12377" data-name="Path 12377" d="M17.826,3.06A10.442,10.442,0,0,0,3.059,17.827,10.442,10.442,0,1,0,17.826,3.06ZM10.442,19.477a9.033,9.033,0,1,1,9.033-9.033A9.044,9.044,0,0,1,10.442,19.477Z" transform="translate(9 9)" fill="#fff" />
                 </g>    
                <g id="Group_3519" data-name="Group 3519" transform="translate(4.147 5.885)">
              <g id="Group_3518" data-name="Group 3518">
              <path id="Path_12378" data-name="Path 12378" d="M113.583,144.95a2.285,2.285,0,0,0-3.233,0l-3.64,3.64-1.148-1.148a2.286,2.286,0,1,0-3.233,3.233l2.764,2.764a2.286,2.286,0,0,0,3.233,0l5.257-5.257A2.289,2.289,0,0,0,113.583,144.95Zm-1,2.237-5.257,5.257a.877.877,0,0,1-1.24,0l-2.764-2.764a.877.877,0,0,1,1.24-1.24l1.646,1.646a.7.7,0,0,0,1,0l4.138-4.138a.877.877,0,0,1,1.24,1.24Z" transform="translate(-92.66 -135.28)" fill="#fff" />
                </g>
                </g>
                </g>       
                </svg>

                <div className="rectangle2"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3507" data-name="Group 3507" transform="translate(-0.147 -0.231)">
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(0.147 0.231)" fill="#2fac26" />

              <g id="Group_3516" data-name="Group 3516">
              <path id="Path_12377" data-name="Path 12377" d="M17.826,3.06A10.442,10.442,0,0,0,3.059,17.827,10.442,10.442,0,1,0,17.826,3.06ZM10.442,19.477a9.033,9.033,0,1,1,9.033-9.033A9.044,9.044,0,0,1,10.442,19.477Z" transform="translate(9 9)" fill="#fff" />
                 </g>    
                <g id="Group_3519" data-name="Group 3519" transform="translate(4.147 5.885)">
              <g id="Group_3518" data-name="Group 3518">
              <path id="Path_12378" data-name="Path 12378" d="M113.583,144.95a2.285,2.285,0,0,0-3.233,0l-3.64,3.64-1.148-1.148a2.286,2.286,0,1,0-3.233,3.233l2.764,2.764a2.286,2.286,0,0,0,3.233,0l5.257-5.257A2.289,2.289,0,0,0,113.583,144.95Zm-1,2.237-5.257,5.257a.877.877,0,0,1-1.24,0l-2.764-2.764a.877.877,0,0,1,1.24-1.24l1.646,1.646a.7.7,0,0,0,1,0l4.138-4.138a.877.877,0,0,1,1.24,1.24Z" transform="translate(-92.66 -135.28)" fill="#fff" />
                </g>
                </g>
                </g>       
                </svg>

             <div className="rectangle1" />
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" viewBox="0 0 39 39" className="col2-svg">
              <g id="Group_3511" data-name="Group 3511" transform="translate(-0.249 0.373)">
               <g id="Group_3510" data-name="Group 3510" transform="translate(0 0)">
                <g id="Group_3508" data-name="Group 3508">
                   <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(0.249 -0.373)" fill="#9d9993" />
                  </g>
                  </g>
                  <g id="Group_3517" data-name="Group 3517" transform="translate(0 0)">
              <g id="Group_3516" data-name="Group 3516">
              <path id="Path_12377" data-name="Path 12377" d="M17.826,3.06A10.442,10.442,0,0,0,3.059,17.827,10.442,10.442,0,1,0,17.826,3.06ZM10.442,19.477a9.033,9.033,0,1,1,9.033-9.033A9.044,9.044,0,0,1,10.442,19.477Z" transform="translate(9 9)" fill="#fff" />
                 </g>
                </g>
              </g>
             </svg>

            <Col xs={12}>
              <Row>
               
               
                <Col></Col>
                <Col></Col>
              </Row>
            </Col>
            <Col>
            </Col>
            <Row className='fieldtop'>
              <Col className="stepsname">Data Collection</Col>
              <Col className="stepsname">Data Mapping</Col>
              <Col className="stepsname">Data Cleaning</Col>
              <Col className="stepsname">Completed</Col>
            </Row>
          </Col>
          <Col className="button-back-to-home-col">
            <Button
              style={{
                backgroundColor: "#141515",
                color: "#FFFFFF",
                fontSize: "14px",
                marginTop: "40px",
                height: "37px",
                width:"140px",
                marginLeft: "145px",
                boxShadow: "2px 18px 20px #C8CACF",
                //textTransform: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingRight: "15px",
                paddingBottom: "8px",
                textTransform: "none"
              }}
              // className="button-back-to-home"
              startIcon={<ChevronLeftOutlinedIcon style={{ marginBottom: 3 }} />}
              component={Link} to="/"
            >
              Back to home
            </Button>
          </Col>
        </Row>
        <Row>
          <p style={{
            borderBottom: "solid", width: "fit-content",
            padding: "5px 0px", marginLeft: "-7px",
            fontFamily: 'Source Sans Pro', fontSize: "19px"
          }}>
            Data Cleaning</p>
        </Row>
        <Row>
          <TableContainer sx={{ marginLeft: -2 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead style={{ backgroundColor: "#EBEBEB" }}>
                <TableRow>
                  <TableCell sx={{ color: "#656363", fontWeight: 600 }}>Task</TableCell>
                  <TableCell sx={{ color: "#656363", fontWeight: 600 }}>Select Column</TableCell>
                  <TableCell sx={{ color: "#656363", fontWeight: 600 }}></TableCell>
                  <TableCell sx={{ color: "#656363", fontWeight: 600 }}>Status</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: rowColor }}
                >
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    Clean Text
                  </TableCell>

                  <TableCell>
                    <FormControl
                      size="small"
                      style={{ width: '200px' }}

                    >
                      {array.map((option) => (

                        <Select value={selectedValue} onChange={handleDrop}>
                          {array1.map((h) => (

                            <MenuItem key={option} value={option[h]}>
                              {option[h]}
                            </MenuItem>

                          ))}
                        </Select>
                      ))}

                    </FormControl>
                  </TableCell>

                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    <Button variant="primary" onClick={handleClean}
                    >
                      Clean Text
                    </Button>
                  </TableCell>

                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent style={{ justifyContent: 'center', typography: { fontFamily: 'Source Sans Pro, sans-serif' } }}>Do you want to remove numbers in between texts?</DialogContent>
                    {/* <DialogContent>
                      <DialogContentText>
                        Press "Yes" to continue or "No" to cancel.
                      </DialogContentText>
                    </DialogContent> */}
                    <DialogActions style={{ justifyContent: 'center', typography: { fontFamily: 'Source Sans Pro, sans-serif' } }}>
                      <Button onClick={() => handleConfirmation(true)} color="primary">
                        Yes
                      </Button>
                      <Button onClick={() => handleConfirmation(false)} color="primary" autoFocus>
                        No
                      </Button>
                    </DialogActions>
                  </Dialog>


                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    {status === 'pending' && <h8>Not completed</h8>}
                    {status === 'progress' && <h8>Progress</h8>}
                    {status === 'completed' && <h8>Completed</h8>}
                  </TableCell>
                </TableRow>

                <TableRow

                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: rowColo }}
                >
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    Lemmatize Text
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    <FormControl
                      size="small"
                      style={{ width: '200px' }}

                    >
                      {array.map((option) => (

                        <Select value={lemValue} onChange={handleLemdrop}>
                          {array1.map((h) => (

                            <MenuItem key={option} value={option[h]}>
                              {option[h]}
                            </MenuItem>

                          ))}
                        </Select>
                      ))}

                    </FormControl>
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    <Button variant="primary" onClick={handleLem}>
                      Lemmatize
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    {lemstatus === 'pending' && <h8>Not completed</h8>}
                    {lemstatus === 'progress' && <h8>Progress</h8>}
                    {lemstatus === 'completed' && <h8>Completed</h8>}
                  </TableCell>
                </TableRow>

                <TableRow

                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: rowCol }}
                >
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    POS Tagging
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    <FormControl
                      size="small"
                      style={{ width: '200px' }}

                    >
                      {array.map((option) => (

                        <Select value={pos} onChange={handlePosvalue}>
                          {array1.map((h) => (

                            <MenuItem key={option} value={option[h]}>
                              {option[h]}
                            </MenuItem>

                          ))}
                        </Select>
                      ))}

                    </FormControl>
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    <Button variant="primary" onClick={handlePos}>
                      POS tag
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ borderColor: "#fff", color: "#656363" }}>
                    {posstatus === 'pending' && <h8>Not completed</h8>}
                    {posstatus === 'progress' && <h8>Progress</h8>}
                    {posstatus === 'completed' && <h8>Completed</h8>}
                  </TableCell>
                </TableRow>


              </TableBody>

            </Table>
          </TableContainer>
         
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'flex-end', margin: "7px" }}>
          <Button component={Link} to="/fieldmapping"
            startIcon={<ArrowCircleLeftOutlinedIcon />}
            variant="outlined" style={{ margin: ".55rem", width: "7vw", textTransform: "none", }}>
            Cancel
          </Button>


          <Button component={Link} to="/projectstudio"
            startIcon={<ArrowCircleRightOutlinedIcon />}
            variant="contained" style={{ margin: ".55rem", width: "7vw", textTransform: "none" }} >
            Next
          </Button>
        </Row>
      </Container>
    </div>
  )

}