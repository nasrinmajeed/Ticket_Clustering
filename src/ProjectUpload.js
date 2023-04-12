import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import Table1 from "./Table1"
import DenseTable from './Table1';
import { Stack } from '@mui/system';

// const tickets = ['None', 'Ticket1', 'Ticket2', 'Ticket3'];

export default function BasicSelect() {

  const [tickettype, setTicket] = React.useState('');
  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  const [projectname, setName] = useState('');
  function handleName(e) {
    setName(e.target.value);
  }

  const [description, setDes] = useState('');
  function handleDes(e) {
    setDes(e.target.value)
  }

  const [file, setFile] = useState('');
  function handleFile(e) {
    setFile(e.target.files[0])
    console.log(e.target.files)
  }

  function handleApi(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://127.0.0.1:5000/file-upload', formData)
      .then(function (response) {
        console.log(file.name);

      });

    const Filename = (file.name)
    const Object = {
      Projectname: projectname,
      Description: description,
      Tickettype: tickettype,
      Filename: Filename,
    };
    console.log(Object)
    fetch('http://localhost:3000/Projects', {
      method: 'POST',
      body: JSON.stringify(
        Object
      ),
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
    .then( res =>{
      if (res.status === 201){
      alert('File uploaded!')
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
      <h5 style={{ textAlign: "left", padding: "12px", paddingLeft: "42px", textDecoration: "underline" }}>Projects</h5>
      <Box sx={{ '& .MuiTextField-root': { m: 1.85, width: '139ch', marginLeft: "43px" } }}
        noValidate
        autoComplete="off">
        <div>
          <TextField
            required
            id="filled-required"
            label="Project name"
            variant="filled"
            onChange={handleName} />
        </div>
        <div>
          <TextField
            required={true}
            id="outlined-required"
            label="Description"
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
          <MenuItem value={"Ticket1"}>Ticket1</MenuItem>
          <MenuItem value={"Ticket2"}>Ticket2</MenuItem>
          <MenuItem value={"Ticket3"}>Ticket3</MenuItem>
        </TextField>

        {/* <FormControl sx={{ m: 2, minWidth: 1224 }} variant="outlined">
                    <InputLabel id="demo-simple-select-label">Select ticket type*</InputLabel>
                    <Select
                        value={type}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Type 1</MenuItem>
                        <MenuItem value={2}>Type 2</MenuItem>
                        <MenuItem value={3}>Type 3</MenuItem>
                    </Select>
                </FormControl> */}
        <Stack direction="row"
          spacing={2}
          alignContent="space-between"
        >
          <div style={{
            paddingLeft: "29.5px",
          }}>

            <Button variant="outlined" size="small" onChange={handleFile} sx={{ borderColor: "#cdd4d9", padding: "15px", width: "46vw", height: "5vw", marginLeft: "13px", display: "block", color: "#656363" }}>
              <input type="file" />
            </Button>
          </div><br />
          <div style={{
            paddingLeft: "20.5px"
          }}>
            <Button type="submit" variant="outlined" size="large" onChange={handleFile} onClick={handleApi} sx={{
              borderColor: "#cdd4d9", textTransform: "none",
              color: "#000", padding: "15px", width: "46vw", height: "5vw", marginLeft: "-10px", color: "#656363",
            }}>
              <div>

                {/* <svg id="upload-svgrepo-com" xmlns=http://www.w3.org/2000/svg width="29.4" height="29.406" viewBox="0 0 29.4 29.406">
                <g id="Group_3442" data-name="Group 3442">
                  <path id="Path_12319" data-name="Path 12319" d="M152.546,18.406a1.246,1.246,0,0,0,1.734-.06l2.88-3.1V33.082a1.224,1.224,0,1,0,2.448,0V15.244l2.88,3.1a1.227,1.227,0,0,0,1.794-1.674l-5-5.376a1.241,1.241,0,0,0-.894-.39,1.221,1.221,0,0,0-.894.39l-5,5.376a1.226,1.226,0,0,0,.06,1.74Z" transform="translate(-143.684 -10.9)" />
                  <path id="Path_12320" data-name="Path 12320" d="M39.176,335a1.221,1.221,0,0,0-1.224,1.224v6.288h-24.5v-6.288a1.224,1.224,0,1,0-2.448,0v7.512a1.221,1.221,0,0,0,1.224,1.224H39.176a1.221,1.221,0,0,0,1.224-1.224v-7.512A1.221,1.221,0,0,0,39.176,335Z" transform="translate(-11 -315.554)" />
                </g></svg> */}

                <div>Upload Ticket Dump</div>

              </div>

            </Button>
          </div>
        </Stack>
        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "20px" }}>
          <a href="/" style={{textDecoration: "none" }}>
          <Button variant="outlined" style={{ margin: ".55rem", width: "7vw"}}> Cancel </Button></a>
          <a href='/datainfo'>
            <Button variant="contained" style={{ margin: ".55rem", width: "7vw" }}> Next</Button>
          </a>
        </div>
      </Box></>
  );
}

