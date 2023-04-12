import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
//import { Container } from '@mui/system';
import { Col, Row } from 'react-bootstrap';
import DenseTable from './Table1';
import DenseTable1 from './Table2';
import { Container } from '@mui/system';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

//import { createMuiTheme} from '@material-ui/core/styles';



export default function FormPropsTextFields() {
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
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3507" data-name="Group 3507" transform="translate(-0.147 -0.231)">
                  <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(0.147 0.231)" fill="#2fac26" />
                  <g id="verified-database-symbol-for-interface-svgrepo-com" transform="translate(9.889 9.83)">
                    <path id="Path_12374" data-name="Path 12374" d="M12.9,17.418a5.744,5.744,0,0,0,.847.192,3.044,3.044,0,0,1-2.857,2.027H3.048A3.051,3.051,0,0,1,0,16.59V7.011A3.051,3.051,0,0,1,3.048,3.963H5.394a3.044,3.044,0,0,1,3-2.613h4.229A3.051,3.051,0,0,1,15.674,4.4V6.474a5.514,5.514,0,0,0-.871-.109V4.4a2.18,2.18,0,0,0-2.177-2.177H8.4A2.18,2.18,0,0,0,6.265,3.963h4.622A3.053,3.053,0,0,1,13.871,6.4a5.723,5.723,0,0,0-.853.177,2.179,2.179,0,0,0-2.131-1.739H3.05A2.18,2.18,0,0,0,.873,7.011V16.59A2.181,2.181,0,0,0,3.05,18.767h7.838A2.181,2.181,0,0,0,12.9,17.418Zm4.29-.849a5.261,5.261,0,1,1,1.925-7.186A5.267,5.267,0,0,1,17.185,16.569Zm-.435-.753a4.391,4.391,0,1,0-6-1.608A4.394,4.394,0,0,0,16.75,15.816Zm1.757.43-2.264,1.306,1.742,3.016,2.264-1.306Zm1.976,3.425L18.22,20.978a1.307,1.307,0,0,0,2.263-1.306ZM8.408,7.117h-5.8v.653h5.8V7.117Zm-1.333,2.9H2.612v.653H7.075ZM2.612,13.577H7.075v-.653H2.612Zm0,2.9h5.8v-.653h-5.8Zm11.094-3.56-1.352-1.5-.646.585,1.913,2.116,3.737-3.112-.558-.669Z" transform="translate(0 -1.35)" fill="#fff" />
                  </g>
                </g>
              </svg><div className="rectangle" />
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3509" data-name="Group 3509" transform="translate(0.418 0)">
                  <g id="Group_3508" data-name="Group 3508" transform="translate(0 0)">
                    <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(-0.418 0)" fill="#9d9993" />
                  </g>
                  <g id="data-cloud-svgrepo-com" transform="translate(8.421 7.942)">
                    <path id="Path_12375" data-name="Path 12375" d="M12.225,78.553H.385A.385.385,0,0,0,0,78.938v3.5a.385.385,0,0,0,.385.385h11.84a.385.385,0,0,0,.385-.385v-3.5A.385.385,0,0,0,12.225,78.553ZM6.305,81.6H1.251V79.578H6.305Zm5.92,2.116H.385A.385.385,0,0,0,0,84.1v3.5a.385.385,0,0,0,.385.385h11.84a.385.385,0,0,0,.385-.385V84.1A.385.385,0,0,0,12.225,83.715Zm-5.92,2.994H1.251V84.687H6.305Zm5.92,2.118H.385A.385.385,0,0,0,0,89.213v3.5a.385.385,0,0,0,.385.385h11.84a.385.385,0,0,0,.385-.385v-3.5A.385.385,0,0,0,12.225,88.827Zm-5.92,3.145H1.251V89.951H6.305Zm20.874-8.486a4.872,4.872,0,0,1-4.867,4.867H13.527a1.28,1.28,0,0,0,.1-.489v-.538h8.684a3.84,3.84,0,1,0-.642-7.621l-.328.055-.185-.277a3.837,3.837,0,0,0-3.586-1.7l-.433.044-.114-.42a3.834,3.834,0,0,0-7.5.464H8.488a4.863,4.863,0,0,1,9.4-1.135,4.864,4.864,0,0,1,3.934,1.906,4.541,4.541,0,0,1,.491-.028A4.873,4.873,0,0,1,27.179,83.487Z" transform="translate(0 -73.552)" fill="#fff" />
                  </g>
                </g>
              </svg>
              <div className="rectangle1" />
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3511" data-name="Group 3511" transform="translate(-0.249 0.373)">
                  <g id="Group_3510" data-name="Group 3510" transform="translate(0 0)">
                    <g id="Group_3508" data-name="Group 3508">
                      <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(0.249 -0.373)" fill="#9d9993" />
                    </g>
                  </g>
                  <g id="natural-cleaning-svgrepo-com" transform="translate(7.404 7.118)">
                    <path id="Path_12376" data-name="Path 12376" d="M24.392,10.495A1.925,1.925,0,0,0,23.427,9.1,1.949,1.949,0,0,0,21.715,9l-3.089,1.279a6.616,6.616,0,0,0-.463-1.109l3.092-1.281A1.947,1.947,0,0,0,22.393,6.6a1.925,1.925,0,0,0-.3-1.668h0a11.714,11.714,0,0,0-2.5-2.5,1.925,1.925,0,0,0-1.668-.3,1.948,1.948,0,0,0-1.284,1.137L15.357,6.361A6.626,6.626,0,0,0,14.248,5.9L15.528,2.81a1.947,1.947,0,0,0-.1-1.712A1.925,1.925,0,0,0,14.03.133h0a11.715,11.715,0,0,0-3.535,0A1.925,1.925,0,0,0,9.1,1.1,1.948,1.948,0,0,0,9,2.81L10.277,5.9a6.617,6.617,0,0,0-1.109.463L7.887,3.27A1.947,1.947,0,0,0,6.6,2.132a1.925,1.925,0,0,0-1.668.3,11.723,11.723,0,0,0-2.5,2.5,1.925,1.925,0,0,0-.3,1.668A1.948,1.948,0,0,0,3.27,7.887L6.361,9.168A6.626,6.626,0,0,0,5.9,10.277L2.81,9A1.948,1.948,0,0,0,1.1,9.1,1.925,1.925,0,0,0,.133,10.5a11.705,11.705,0,0,0,0,3.535A1.925,1.925,0,0,0,1.1,15.424a1.948,1.948,0,0,0,1.712.1L5.9,14.248a6.616,6.616,0,0,0,.463,1.109L3.27,16.638a1.947,1.947,0,0,0-1.137,1.284,1.925,1.925,0,0,0,.3,1.668h0a11.714,11.714,0,0,0,2.5,2.5,1.921,1.921,0,0,0,1.141.376,1.963,1.963,0,0,0,1.811-1.21l1.281-3.092a6.626,6.626,0,0,0,1.109.463L9,21.716a1.947,1.947,0,0,0,.1,1.712,1.925,1.925,0,0,0,1.394.965h0a11.706,11.706,0,0,0,3.535,0,1.925,1.925,0,0,0,1.394-.965,1.948,1.948,0,0,0,.1-1.712l-1.279-3.089a6.616,6.616,0,0,0,1.109-.463l1.281,3.092a1.963,1.963,0,0,0,1.811,1.21,1.921,1.921,0,0,0,1.141-.376,11.714,11.714,0,0,0,2.5-2.5,1.925,1.925,0,0,0,.3-1.668,1.948,1.948,0,0,0-1.137-1.284l-3.092-1.281a6.626,6.626,0,0,0,.463-1.109l3.089,1.279a1.948,1.948,0,0,0,1.712-.1,1.925,1.925,0,0,0,.965-1.394A11.714,11.714,0,0,0,24.392,10.495Zm-1.865,3.251a.043.043,0,0,1-.026.035.07.07,0,0,1-.063,0L18.927,12.33c0-.023,0-.045,0-.068s0-.045,0-.068l3.511-1.454a.069.069,0,0,1,.063,0,.043.043,0,0,1,.026.035A9.831,9.831,0,0,1,22.527,13.746Zm-1.952,4.683a.043.043,0,0,1-.006.043,9.823,9.823,0,0,1-2.1,2.1.043.043,0,0,1-.043.006.069.069,0,0,1-.048-.042L16.926,17.02l.094-.094,3.514,1.455A.07.07,0,0,1,20.575,18.429ZM13.781,22.5a.043.043,0,0,1-.035.026,9.834,9.834,0,0,1-2.966,0h0a.043.043,0,0,1-.035-.026.069.069,0,0,1,0-.063l1.454-3.511.068,0,.068,0,1.454,3.511A.069.069,0,0,1,13.781,22.5ZM6.1,20.575a.043.043,0,0,1-.043-.006,9.823,9.823,0,0,1-2.1-2.1.043.043,0,0,1-.006-.043.069.069,0,0,1,.042-.048l3.514-1.455.094.094L6.144,20.533A.07.07,0,0,1,6.1,20.575ZM3.95,6.1a.043.043,0,0,1,.006-.043,9.823,9.823,0,0,1,2.1-2.1.039.039,0,0,1,.025-.009l.018,0a.069.069,0,0,1,.048.042L7.6,7.506,7.506,7.6,3.992,6.144A.069.069,0,0,1,3.95,6.1Zm6.795-4.072A.043.043,0,0,1,10.78,2a9.83,9.83,0,0,1,2.966,0,.043.043,0,0,1,.035.026.069.069,0,0,1,0,.063L12.33,5.6l-.068,0-.068,0L10.741,2.088A.07.07,0,0,1,10.745,2.024ZM18.429,3.95l.018,0a.039.039,0,0,1,.025.009,9.823,9.823,0,0,1,2.1,2.1.043.043,0,0,1,.006.043.069.069,0,0,1-.042.048L17.02,7.6l-.094-.094,1.455-3.514A.069.069,0,0,1,18.429,3.95ZM12.263,17.042a4.779,4.779,0,1,1,4.779-4.779A4.785,4.785,0,0,1,12.263,17.042ZM5.6,12.33,2.088,13.784a.07.07,0,0,1-.063,0A.043.043,0,0,1,2,13.745a9.823,9.823,0,0,1,0-2.966.043.043,0,0,1,.026-.035.072.072,0,0,1,.036-.01.071.071,0,0,1,.028.006L5.6,12.194c0,.023,0,.045,0,.068S5.6,12.308,5.6,12.33Z" transform="translate(0.001 0.001)" fill="#fff" />
                  </g>
                </g>
              </svg>
              <div className="rectangle1" />
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" className="col2-svg">
                <g id="Group_3587" data-name="Group 3587" transform="translate(-1156.999 -228)">
                  <g id="Group_3510" data-name="Group 3510" transform="translate(1157.084 228.373)">
                    <g id="Group_3508" data-name="Group 3508">
                      <circle id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19.5" r="19.5" transform="translate(-0.085 -0.373)" fill="#9d9993" />
                    </g>
                  </g>
                  <path id="finished-svgrepo-com" d="M31.323,166.072l9.214-13.163a.718.718,0,1,1,1.176.823L32.074,167.5a.718.718,0,0,1-1.02.164l-5.169-3.877a.718.718,0,1,1,.862-1.149Zm10.214-6.859a.718.718,0,0,1,0-1.436h4.308a.718.718,0,0,1,0,1.436Zm-2.872,4.308a.718.718,0,0,1,0-1.436h7.178a.718.718,0,0,1,0,1.436Zm-2.872,4.308a.718.718,0,0,1,0-1.436h10.05a.718.718,0,0,1,0,1.436Z" transform="translate(1140.839 86.315)" fill="#fff" />
                </g>
              </svg>
              <Col xs={12}>
                <svg id="tick-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="20.885" height="20.885" viewBox="0 0 20.885 20.885">
                  <g id="Group_3517" data-name="Group 3517" transform="translate(0 0)">
                    <g id="Group_3516" data-name="Group 3516">
                      <path id="Path_12377" data-name="Path 12377" d="M17.826,3.06A10.442,10.442,0,0,0,3.059,17.827,10.442,10.442,0,1,0,17.826,3.06ZM10.442,19.477a9.033,9.033,0,1,1,9.033-9.033A9.044,9.044,0,0,1,10.442,19.477Z" transform="translate(0 -0.001)" fill="#42b61f" />
                    </g>
                  </g>
                  <g id="Group_3519" data-name="Group 3519" transform="translate(4.147 5.885)">
                    <g id="Group_3518" data-name="Group 3518">
                      <path id="Path_12378" data-name="Path 12378" d="M113.583,144.95a2.285,2.285,0,0,0-3.233,0l-3.64,3.64-1.148-1.148a2.286,2.286,0,1,0-3.233,3.233l2.764,2.764a2.286,2.286,0,0,0,3.233,0l5.257-5.257A2.289,2.289,0,0,0,113.583,144.95Zm-1,2.237-5.257,5.257a.877.877,0,0,1-1.24,0l-2.764-2.764a.877.877,0,0,1,1.24-1.24l1.646,1.646a.7.7,0,0,0,1,0l4.138-4.138a.877.877,0,0,1,1.24,1.24Z" transform="translate(-101.66 -144.28)" fill="#42b61f" />
                    </g>
                  </g>
                </svg>
              </Col>
              <Col>
              </Col>
              <Row className="col_stepsname">
                <Col className="stepsname">Data Collection</Col>
                <Col className="stepsname">Data Mapping</Col>
                <Col className="stepsname">Data Cleaning</Col>
                <Col className="stepsname">Completed</Col>
              </Row>
            </Col>
            <Col style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <a href='/' style={{textDecoration: "none"}}>
              <Button size="medium" variant="contained" style={{ backgroundColor: "black", marginTop: "20px", textTransform: "none" }}>Back to home</Button></a>
              <a href='/fieldmapping' style={{textDecoration: "none"}}>
              <Button size="medium" variant="contained" style={{ backgroundColor: "black", marginTop: "20px", marginLeft: "5px",textTransform: "none" }}>Next</Button>
              </a>
            </Col>
          </Row>

          <Row style={{ fontFamily: "'Source Sans Pro', sans-serif" }} className="row-3">
            <p style={{ textDecoration: "underline", fontSize: "22px", marginBottom: "0px" }}>Projects</p>
            <Col className="projects-column1">
              <TextField
                //required
                id="outlined-required"
                label="Project Name"
                style={{ width: "59vw", backgroundColor: "#edf0f1", color: "#000", marginBottom: "1px" }}
                InputProps={{ sx: { height: 38 } }}
                InputLabelProps={{ style: { fontSize: 13, marginTop: -5.3 } }}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "black"
                    }
                  },
                  "& label.Mui-focused": {
                    color: "black"
                  }
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={3.7}
                label="Description"
                style={{ width: "59vw", marginBottom: "1px" }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 13 } }}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "black"
                    }
                  },
                  "& label.Mui-focused": {
                    color: "black"
                  }
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select ticket type"
                defaultValue="None"
                //helperText="Select ticket type"
                style={{ width: "59vw", marginBottom: "20px" }}
                InputProps={{ sx: { height: 38 } }}
                InputLabelProps={{ style: { fontSize: 13, marginTop: -5.3 } }}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "black"
                    }
                  },
                  "& label.Mui-focused": {
                    color: "black"
                  }
                }}
                value={ticket}
                onChange={handleChange}
              >
                {/* {tickets.map((option) => (
                  <MenuItem style={{fontSize: 12}}>
                    {option}
                  </MenuItem>
                ))} */}
                <MenuItem value={"Ticket1"}>Ticket1</MenuItem>
                <MenuItem value={"Ticket2"}>Ticket2</MenuItem>
                <MenuItem value={"Ticket3"}>Ticket3</MenuItem>
              </TextField>

              <Button variant="outlined" size="small" sx={{
                borderColor: "#cdd4d9", padding: "20px", width: "59vw", display: "block", color: "#656363", "& .MuiButton-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "black"
                  }
                }
              }}>
                <div>
                  <svg id="upload-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29.4 29.406">
                    <g id="Group_3442" data-name="Group 3442">
                      <path id="Path_12319" data-name="Path 12319" d="M152.546,18.406a1.246,1.246,0,0,0,1.734-.06l2.88-3.1V33.082a1.224,1.224,0,1,0,2.448,0V15.244l2.88,3.1a1.227,1.227,0,0,0,1.794-1.674l-5-5.376a1.241,1.241,0,0,0-.894-.39,1.221,1.221,0,0,0-.894.39l-5,5.376a1.226,1.226,0,0,0,.06,1.74Z" transform="translate(-143.684 -10.9)" />
                      <path id="Path_12320" data-name="Path 12320" d="M39.176,335a1.221,1.221,0,0,0-1.224,1.224v6.288h-24.5v-6.288a1.224,1.224,0,1,0-2.448,0v7.512a1.221,1.221,0,0,0,1.224,1.224H39.176a1.221,1.221,0,0,0,1.224-1.224v-7.512A1.221,1.221,0,0,0,39.176,335Z" transform="translate(-11 -315.554)" />
                    </g>
                  </svg>

                </div>
                <div>
                  Upload Ticket Dump
                </div>
              </Button>
            </Col>
            <Col className="table2"><DenseTable1 /></Col>
          </Row>
          <br />
          <p style={{ fontWeight: 600,fontSize: "1.15rem" }} >Preview</p>
          <Row>
            <Col>
              <DenseTable />
            </Col>
          </Row>
        </Box>
      </Container>
    </div>
  );
}

