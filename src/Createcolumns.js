import React from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
//import AdvancedExample from './Pagination';

export default function Createcolumns() {

    const [selection, setSelection] = useState('');
    const [showSubForm, setShowSubForm] = useState(false);
    const [cnames, setCnames] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptions, setSelectedOptions] = useState('');
    const [filepath, setPath] = useState('');

  
    const handleChange = (event) => {
      setSelection(event.target.value);
      setShowSubForm(event.target.value === 'Select columns');
    };

    useEffect(() => { 
      Getcolumn();
    }, []);
  
  
async function Getcolumn() {
  // event.preventdefault()
  const response1 = await axios.get('http://localhost:5000/get_column_names')
    .then(response1 => {
      setCnames(response1.data)
      // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
    }
    )

  const response2 = await axios.get('http://localhost:5000/get_filepath')
    .then(response2 => {
      setPath(response2.data)
      console.log(response2)
      // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
    }
    )  
  }
console.log(cnames)
console.log(filepath)

   
  let array = [];
  
  for (let key in cnames) {
    if (Object.hasOwnProperty.call(cnames, key)) {
      array.push(cnames[key])
    }
  }
console.log(array)
let array1 = [];
        for(let i=0;i<array.length;i++){
          array1 = Object.keys(array[i])
          break;
        }
        console.log(array1)
// console.log(array1)
const handleSelect = (event) => {
  setSelectedOption(event.target.value);
}
const handleSelects = (event) => {
  setSelectedOptions(event.target.value);
};

function handleSubmit () {
    // const formData = {
    //   column1: selectedOption,
    //   column2: selectedOptions,
    // };

    let column1= selectedOption
    let column2= selectedOptions
    let filename= filepath

    fetch(('http://localhost:5000/merge-csv-columns'),{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filepath, column1, column2 }),
    })
    .then((response) => {response.json()
      if(response.ok) {
        alert("Column Generated")
        setSelectedOption('');
        setSelectedOptions('')
        window.location.reload();

        // display success message or perform other actions
      }
    
    } 
    )
    .then((data) => {
      // Do something with the response data
    })
   
}
 

    return (
      <form>
        <Box mb={2}>
        <h6 style={{ textAlign: "left", paddingLeft: "10px", color: '#707070'}}>Generate columns</h6>
          <FormControl  variant="filled" fullWidth>
            <InputLabel>Column</InputLabel>
            <Select value={selection} onChange={handleChange}>

              <MenuItem value="Select columns">Select columns</MenuItem>
              
            </Select>
          </FormControl>
        </Box>
  
        {showSubForm && (
          <Box mb={2}>
            <Grid container alignItems="center" spacing={2}  sx={{marginTop:'-10px'}} >
                <Grid item xs={2}>
                  <label>Column 1</label>
                </Grid>
                <Grid item xs={4} >
                    <FormControl 
                     size="small"
                     style={{ height: '0px', width: '250px' }}
                     >
                    {array.map((option) => (

                    <Select value= {selectedOption} onChange={handleSelect}>
                       {array1.map((h) => (

                              <MenuItem key={option} value={option[h]}>
                                {option[h]}
                              </MenuItem>
                       ))}
                          </Select>
                            ))}

                  </FormControl>
                </Grid>               
            </Grid>      
            <br/>
            <Grid container alignItems="center" spacing={2}  sx={{marginTop:'-10px'}} >
                <Grid item xs={2}>
                  <label>Column 2</label>
                </Grid>
                <Grid item xs={4} >
                    <FormControl 
                     size="small"
                     style={{ height: '0px', width: '250px' }}
                     >
                    {array.map((option) => (

                    <Select value= {selectedOptions} onChange={handleSelects}>
                       {array1.map((h) => (

                              <MenuItem key={option} value={option[h]}>
                                {option[h]}
                              </MenuItem>
                       ))}
                          </Select>
                            ))}

                  </FormControl>
                </Grid>               
            </Grid>        
          </Box>
        )}
        <br/>
        <div style={{alignItems: "right"}}>
        <Button  variant="contained" color="primary" 
        onClick={handleSubmit}
        >
          Generate Columns
        </Button>
        </div>
      </form>
    );
  }
