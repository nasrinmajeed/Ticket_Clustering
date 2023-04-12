import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { Stack } from '@mui/system';
import { useEffect } from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Alert from '@mui/material/Alert';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Papa from "papaparse";
import Pako from 'pako';

export default function Basicselect() {

  const [info, setInfo] = useState(null);
  const [guid, setGuid] = useState(null);
  const [jsonData, setJsonData] = useState(null);


  const [tickettype, setTicket] = React.useState('');
  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  const [projectname, setName] = React.useState('');
  const handleName = (event) => {
    setName(event.target.value);
  }

  const [description, setDes] = React.useState('');
  const handleDes = (e) => {
    setDes(e.target.value)
  }

  const [file, setFile] = React.useState('');

  const [data, setData] = React.useState([]);
  const [columnArray, setColumn] = React.useState([]);
  const [values, setValues] = React.useState([]);
  const [parsedData, setParsedData] = useState([]);


  const handleFile = (e) => {
    setFile(e.target.files[0])
    console.log(e.target.files)

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data)
        // Parsed Data Response in array format
        setParsedData(results.data);
      },
    });

  }

  console.log(parsedData)
  const [formFilled, setFormFilled] = useState(false);

  useEffect(() => {
    if (projectname && description && tickettype && file) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
    setInfo();
  }, [file, projectname, description, tickettype]);

  async function Handleapi() {
    // event.preventdefault()


    const formData = new FormData()
    formData.append('file', file)

    const response1 = await axios.post('http://127.0.0.1:5000/file-upload', formData)
    setInfo(response1.data.new_filename);

    const Filename = (file.name)
    console.log(info)
  
    const Files = {
      Projectname: projectname,
      Description: description,
      Tickettype: tickettype,
      Filename: Filename,
      File_guidname: response1.data.new_filename,
      Filetype: "Raw",
      Clusteringalgorithms: "LDA",
      Files: [],
      // Data: [parsedData],
    };
    console.log(Files)
//    console.log(Files)


    const response2 = await fetch('http://localhost:3000/Projects/', {
      method: 'POST',
      body: JSON.stringify(
              (Files)
       ),
      headers: {
        "Content-Type": "application/json",    
   
      },
    }
    )
      .then(res => {
        if (res.status === 201) {
          // <Alert severity="success">This is a success alert — check it out! </Alert>
          alert('File uploaded!')
          // setName('');
          // setDes('')
          // setTicket(null)
          // setFile('')
          window.location.href = '/datainfo'
        }
      }
      )
    console.log(file.name);

    

  }



  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "0.4rem",
        }}
      ></div>
      {/* <h5 style={{ textAlign: "left", padding: "12px", paddingLeft: "42px", textDecoration: "underline" }}
      >Projects</h5> */}

      <div className="list-pro-new"> Projects</div>


      <Box sx={{ '& .MuiTextField-root': { m: 1.85, width: '139ch', marginLeft: "43px" } }}
        noValidate
        autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Project name"
            value={projectname}
            variant="outlined"
            onChange={handleName}
            className="textfield"
            InputProps={{ disableUnderline: true }}

            />
        </div>
        <div>
          <TextField
            required={true}
            id="outlined-required"
            label="Description"
            value={description}
            onChange={handleDes} />
        </div>

        <TextField
          required={true}
          id="outlined-select-currency"
          select
          label="Select ticket type"
          defaultValue="None"
          //helperText="Select ticket type"
          style={{ width: "93.75vw", marginBottom: "20px" }}
          InputProps={{ sx: { height: 55 } }}
          InputLabelProps={{ style: { fontSize: 15, marginTop: -5.3 } }}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {

              }
            },
            "& label.Mui-focused": {
            }
          }}
          value={tickettype}
          onChange={handleChange}
        >
          {/* {tickets.map((option) => (
                  <MenuItem style={{fontSize: 12}}>
                    {option}
                  </MenuItem>
                ))} */}
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Email Dump"}>Email Dump</MenuItem>
          <MenuItem value={"Ticket Dump"}>Ticket Dump</MenuItem>
          <MenuItem value={"Testing"}>Testing</MenuItem>
        </TextField>

        <Stack direction="row"
          spacing={2}
          alignContent="space-between"
        >
        <div style={{
          paddingLeft: "29.5px",
        }}>

          <Button variant="outlined" size="small" onChange={handleFile} sx={{ borderColor: "#cdd4d9", color: "#000", padding: "15px", width: "93.75vw", height: "5vw", marginLeft: "13px", display: "block", color: "#656363" }}>
            <input type="file" name="file" defaultValue={file} />
          </Button>
        </div>
        <br />
              {/* <div style={{
                paddingLeft: "20.5px"
              }}>
                <Button type="submit" variant="outlined" size="large" onChange={handleFile} onClick={Handleapi} sx={{
                  borderColor: "#cdd4d9", textTransform: "none",
                  color: "#000", padding: "15px", width: "46vw", height: "5vw", marginLeft: "-10px", color: "#656363",
                }}>
                  <div>
                    <div>Upload Ticket Dump</div>
                  </div>
                </Button>
              </div> */}
        </Stack>
        <br />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "24px", }}>
        <Button startIcon={<ArrowCircleLeftOutlinedIcon />}
          variant="outlined" style={{ height: "3vw", margin: ".55rem", width: "10vw", 
          textTransform: "none" }}> 
          Cancel 
        </Button>
        {/* <a href='/datainfo'> */}
        <div>
        <Button startIcon={<ArrowCircleRightOutlinedIcon />} disabled={!formFilled}
          variant="contained" onChange={handleFile} onClick={Handleapi}
         classes={{ disabled: "my-disabled-button" }}
         style={{
          height: "3vw", textAlign: "center",
          size: "small", margin: ".5rem", width: "13.5vw", textTransform: "none"
        }}>
          Upload and move
        </Button>
        </div>
          {/* </a> */}
        </div>
<br/>
<br/>
      </Box></>
  );
}
