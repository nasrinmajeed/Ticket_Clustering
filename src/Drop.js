import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table3 from './Table3'
import { Link } from "react-router-dom";
import MyContext from './MyContext';
import { createContext, useContext } from 'react';


export default function BasicSelect() {
  

  const [dataset, setDataset] = React.useState('');
  // return <Table3 dataset={dataset}/>
  // <Table3 dataset={dataset} />

  let [proj,setProj] = React.useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/project_studio_select",
    {
        method: 'GET',
        body: JSON.stringify(Object),
        headers:{
            "Content-Type": "application/json",
        },

    })
    .then(resp => resp.json()).then(dat=> setProj(dat))

    
},[]);
console.log(proj)

  const handleChange = (event) => {
    setDataset(event.target.value)
  };

  // <DataContext.Provider value={dataset}>
  // <Table3 />
  // </DataContext.Provider>

  return (

    <div>
    <Box className="dropdown">
       <FormControl 
                     size="small"
                     style={{ fontFamily: 'SourceSansPro-Regular',height: '40px', width: '150px' , fontSize: '8px',}}
                     >
        <InputLabel id="demo-simple-select-label" >Select dataset</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dataset}
          label="Select dataset"
          onChange={handleChange}
          style={{ fonstSize:"8px", display: 'flex', flexWrap: 'wrap', maxWidth: '250px'}}
        >
          {proj.map(pro =>
          <MenuItem 
          style={{fontSize:"10px",
          // fontWeight: 'bold', 
          height:"29px", }}
           value={pro} >{pro}</MenuItem>
         
          )}
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}
