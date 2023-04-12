import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
//import { Container } from '@mui/system';
import { Col, Row } from 'react-bootstrap';
import DenseTable from './Table1';
import DenseTable1 from './Table2';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import Tablee from './Tablee'
import Tablesample from './Table1sample';
//import { createMuiTheme} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function FormPropsTextFields(props) {

  const [ticket, setTicket] = React.useState('');
  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  return (
    <div>
      <Container fluid>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mt: 2.5, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Row>
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

                <div className="rectangle1"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" viewBox="0 0 39 39" className="col2-svg">
                 <g id="Group_3509" data-name="Group 3509" transform="translate(0.418 0)">
                  <g id="Group_3508" data-name="Group 3508" transform="translate(0 0)">
                        <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(-0.418 0)" fill="#9d9993" />
                </g>
                  
              <g id="Group_3517" data-name="Group 3517" transform="translate(0 0)">
              <g id="Group_3516" data-name="Group 3516">
              <path id="Path_12377" data-name="Path 12377" d="M17.826,3.06A10.442,10.442,0,0,0,3.059,17.827,10.442,10.442,0,1,0,17.826,3.06ZM10.442,19.477a9.033,9.033,0,1,1,9.033-9.033A9.044,9.044,0,0,1,10.442,19.477Z" transform="translate(8 9)" fill="#fff" />
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

              </Col>

              <Col>
              {/* </Col> */}
              <Row className="col_stepsname">
                <Col className="stepsname">Data Collection</Col>
                <Col className="stepsname">Data Mapping</Col>
                <Col className="stepsname">Data Cleaning</Col>
                <Col className="stepsname">Completed</Col>
              </Row>
            </Col>
            <Col style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              {/* <Button size="small" variant="contained" style={{ backgroundColor: "black", marginTop: "20px" }}>Back to home</Button>
              <Button size="small" variant="contained" style={{ backgroundColor: "black", marginTop: "20px", marginLeft: "5px" }}>Next</Button> */}

            </Col>
          </Row>
          <p style={{ borderBottom: "solid", width: "fit-content",
           padding: "5px 0px", marginLeft: "-7px",
           fontFamily: 'Source Sans Pro',fontSize: "19px"
          }}>
            Preview ( Top 15 data)</p>
          <Row style={{ fontFamily: "'Source Sans Pro', sans-serif" }} className="row-3">            
            <br />
            <br />
            <Col xs={9} >
              <Tablesample />
            </Col>


            <Col xs={3} className="table2">
              <DenseTable1 />
            </Col>
          </Row>

          {/* <p style={{ fontWeight: 600, fontSize: "1.15rem" }} >Preview ( Top 15 data)</p> */}
          {/* <Row>
            <Col>
            </Col>
          </Row> */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "-3px", marginTop:"10px" }}>
            <div>
              <Button
                component={Link} to="/upload"
                startIcon={<ArrowCircleLeftOutlinedIcon />}
                variant="outlined" style={{
                  height: "2.5vw", marginBottom: "0rem", width: "8vw",
                  textTransform: "none"
                }}>
                Cancel
              </Button>
            </div>

            {/* <a href='/datainfo'> */}

            <div>
              <Button
                component={Link} to="/fieldmapping"
                startIcon={<ArrowCircleRightOutlinedIcon />}
                variant="contained"
                classes={{ disabled: "my-disabled-button" }}
                style={{
                  height: "2.5vw", textAlign: "center", marginLeft: "18px",
                  marginBottom: "3rem", width: "8vw", textTransform: "none"
                }}>
                Next
              </Button>
            </div>

          </div>
        </Box>
      </Container>
    </div>
  );
}

