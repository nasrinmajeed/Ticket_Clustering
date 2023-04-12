import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import * as FileSaver from 'file-saver';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(source, destination, datatype, sourceformat, button) {
  return { source, destination, datatype, sourceformat, button };
}

export default function BasicSelect() {

  // const [loading, setLoading] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const handleCheck = (id, value) => {
    const newCheckedItems = [...checkedItems];
    const index = newCheckedItems.indexOf(id);
    if (index === -1) { newCheckedItems.push(id); }
    else { newCheckedItems.splice(index, 1); }
    setCheckedItems(newCheckedItems);
    setIsChecked(value);

  };

  const [dtype, setDtype] = React.useState([]);
  const [value1, setValue1] = React.useState(false);
  const [value2, setValue2] = React.useState('');
  const [selected, setSelected] = React.useState('');

  const Data = {
    Datatype: dtype,
  };

  const [data, setData] = useState('');
  const [header, setHeader] = useState([]);
  const [types, setTypes] = useState([]);
  let [info, setInfo] = useState([]);
  let [a, setA] = useState([]);
  let [b, setB] = useState([]);
  let [mostRecentItem, setMost] = useState([]);
  let arr = []
  let filepath

  useEffect(() => {   
    Handleapi();
  }, []);

  async function Handleapi() {
    // event.preventdefault()
    const response1 = await axios.get('http://localhost:3000/Projects')
      .then(response1 => {
        setInfo(response1.data[response1.data.length - 1])
        setA(response1.data[response1.data.length - 1].Filename)
        // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
      }
      )}

      // console.log(a)

  filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
  
  let response2 = axios.get('http://localhost:5000/getdtypes')
    .then((response2) =>
      setTypes(response2.data)
    )

// console.log(types)
//   console.log(data)
//   console.log(header)
//   console.log(types)
  let unID = 0;
  const tablevalues = (Object.values(types)).map(row => {
    ++unID;
    row = { ...row, unID };
    return row
  })
  // console.log(tablevalues)

  function Adddata() {
    const Infoo = {
      Mapping: {
        Source: tablevalues.column,
        // Destination: description,
        DataTypes: tablevalues.datatype,
        // Newdatatypes: Filename,
      }
    };
    // console.log(Infoo)
    fetch('http://localhost:3000/Projects', {
      method: 'POST',
      body: JSON.stringify(
        Infoo
      ),
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
      .then(res => {
        if (res.status === 201) {
          alert('File posted!')
        }
      }
      )
  }

const [source, setSource] = useState([]);
const [destination, setDestination] = useState([]);
const [isChecked, setIsChecked] = useState(false);
const [select, setSelect] = useState([]);
const [de, setDe] = useState([]);

function handleSubmit () {
  

  // setLoading(true);
  if (isChecked) {
    const formData = {
      source: select,
      dest: de
    };
  

    fetch(('http://localhost:5000/api/my-endpoint'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ select, de }),
      
    })
    .then(setIsBackdropOpen(true))
    .then((response) => {
        // setLoading(false);
        setIsBackdropOpen(false);
        response.json()
        alert('File Mapped')
        window.location.href = '/datacleaning'
    } 
    )
    // .then((data) => {
    //   // Do something with the response data
    // })


    // console.log(formData);
  }
}; 

  return (
  <Container fluid className="container-fluid">
      <Row>
      {/* {loading && <CircularProgress />} */}
      <Col xs={12} md={8} className="col2">
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

            <Col>
            </Col>
            <Row className='fieldtop'>
            <Col className="stepsname">Data collection</Col>
            <Col className="stepsname">Data mapping</Col>
            <Col className="stepsname">Data cleaning</Col>
            <Col className="stepsname">Completed</Col>
                               
            </Row>    
        </Col>  

      </Row>

      <Col style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "-90px" }}>
          <Button component={Link} to="/" size="medium" style={{ backgroundColor: "#141515", color: "#FFFFFF", margin: "8px", alignItems: "center", boxShadow: "2px 18px 20px #C8CACF", textTransform: "none", }}
            startIcon={<ChevronLeftOutlinedIcon />}
          >Back to home</Button>
      </Col>

      <div
        style={{
          display: "flex",
          margin: "1rem",
        }}
      ></div>
      {/* <h5 style={{ textAlign: "left", padding: "15px", textDecoration: "underline" }}>Field Mapping</h5> */}
      <p style={{ borderBottom: "solid", width: "fit-content",
           padding: "5px 0px", marginLeft: "8px",
           fontFamily: 'Source Sans Pro',fontSize: "19px"
          }}>
           Field Mapping</p>
      <TableContainer component={Paper} className="tablerow" sx={{ '& .MuiTextField-root': { m: 0, width: '142ch', p: 0 } }}>
        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '142ch', p: 0 } }}>
          <Table sx={{ minWidth: 6, }} aria-label="customized table" className="tablerow">

            <TableHead>
              <TableRow style={{ backgroundColor: "#f9f9fa" }} >

                <StyledTableCell><span style={{ fontWeight: 'bold', color: 'transparent' }}></span></StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "0.8rem", width:"20%",fontWeight: 600, paddingLeft: "5px" }}>Source</StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "0.8rem", width:"20%", fontWeight: 600, paddingLeft: "5px" }}>Destination</StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "0.8rem",width:"20%", fontWeight: 600, paddingLeft: "5px" }}>Data type</StyledTableCell>
                {/* <StyledTableCell align="left" sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }}></StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }}>Source format</StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }}></StyledTableCell> */}

              </TableRow>
            </TableHead>

            <TableBody>

              {tablevalues.map((column) => (
                <>
                  {/* <TableRow> */}
                  <StyledTableRow key={column.unID} className="tablerow">
                    <TableCell style={{width: "4%"}}>
                      <Checkbox  size="small"    
                        checked={checkedItems.includes(column.unID)}
                        onChange={(e) => handleCheck(column.unID, e.target.checked)}
                      />
                    </TableCell>
                    <TableCell style={{width: "40%"}}>
                      {column[0]}    
                    </TableCell>
                    <TableCell style={{width: "40%"}}>
                    <input
                        variant="outlined" style={{ width: "12vw" }} placeholder={column[0]}
                        disabled={!checkedItems.includes(column.unID)}

                        onBlur={(e) => 
                        {setDestination(e.target.value)
                          // setSource(column[0])
                          setDe([...de, e.target.value])
                          setSelect([...select, column[0]])
                        }}

                        InputProps={{ sx: { height: 35 } }}>
                    </input>
                    </TableCell>
                    <TableCell>
                        {column[1]}
                    </TableCell>
                    {/* <TableCell>
                      <TextField
                        required={true}
                        disabled={!checkedItems.includes(column.unID)}
                        id="outlined-select-currency"
                        select
                        label="select type"
                        style={{ width: "12vw", marginBottom: "1px" }}
                        InputProps={{ sx: { height: 35 } }}
                        InputLabelProps={{ style: { fontSize: 15, marginTop: -8 } }}
                        sx={{
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {}
                          },
                          "& label.Mui-focused": {}
                        }}
                        // value={dtype}
                        onChange={handleChange(column.unID)}

                      >
                        <MenuItem value={"int 64"}>int 64</MenuItem>
                        <MenuItem value={"float 64"}>float 64</MenuItem>
                        <MenuItem value={"string"}>string</MenuItem>
                        <MenuItem value={"date"}>date</MenuItem>
                        <MenuItem value={"bool"}>bool</MenuItem>
                      </TextField>
                    </TableCell>

                    <TableCell key={column.unID}>
                      <div key={column.unID} >
                        {value1 === 'date' && (
                          <TextField
                            // onChange={handleTextFieldChange}
                            // disabled={!checkedItems.includes(column.unID)}
                            disabled={selected != column.unID}
                            hidden={value1 !== 'date'}
                            id="outlined-basic" variant="outlined" style={{ width: "12vw" }}
                            onChange={handleBrowser()}
                            InputProps={{ sx: { height: 35 } }}
                          />
                        )}
                      </div>
                    </TableCell> */}
                    
                  </StyledTableRow>
                  {/* </TableRow> */}
                </>
              ))}
            </TableBody>
          </Table>
        </Box>

      </TableContainer>
      &nbsp;
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "-5px" }}>
        <Button  component={Link} to="/datainfo"
        startIcon={<ArrowCircleLeftOutlinedIcon />}
         variant="outlined" style={{ margin: ".55rem", width: "7vw", 
         textTransform: "none", height: "2.5vw",
        }}> Cancel </Button>

<Backdrop open={isBackdropOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>


        {/* <a href='/projectstudio'> */}
        <Button variant="contained" onClick= {handleSubmit} 
        startIcon={<ArrowCircleRightOutlinedIcon />}
        style={{ margin: ".55rem", width: "7vw" , 
        textTransform: "none", height: "2.5vw" }}> Next</Button>
        {/* </a> */}

      </div>
    </Container>
  )
}
