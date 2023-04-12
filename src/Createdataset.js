import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import axios from 'axios';//import AdvancedExample from './Pagination';
import Tooltip from '@mui/material/Tooltip';
import SnackbarContent from '@mui/material/SnackbarContent';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function Createdataset() {

  const [selection, setSelection] = useState('');
  const [showSubForm, setShowSubForm] = useState(false);
  const [cnames, setCnames] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filepath, setPath] = useState('');
  const [maxdf, setMax] = React.useState('');
  const [mindf, setMin] = React.useState('');
  const [comp, setComp] = React.useState('');
  const [random, setRandom] = React.useState('');
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const alertStyle = {
    backgroundColor: '#666b6f',
    color: "white",
    fontSize: '10px',
  };


  const handleChange = (event) => {
    setSelection(event.target.value);
    setShowSubForm(event.target.value === 'LDA');
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
        // console.log(response2)
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
  for (let i = 0; i < array.length; i++) {
    array1 = Object.keys(array[i])
    break;
  }
  console.log(array1)


  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMax = (event) => {
    setMax(event.target.value);
  }

  const handleMin = (event) => {
    setMin(event.target.value);
  }

  const handleComp = (event) => {
    setComp(event.target.value);
  }

  const handleRandom = (event) => {
    setRandom(event.target.value);
  }

  async function Handlesubmit() {
    setIsBackdropOpen(true);
    const response = await fetch('http://localhost:5000/get_lda', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        file_path: filepath,
        max_df: maxdf,
        min_df: mindf,
        n_components: comp,
        random: random,
        column_name: selectedOption
      })
    })
    if (response.ok) {
      setIsBackdropOpen(false);
      alert("LDA Dataset Created")
      setMax('');
      setMin('')
      setComp('')
      setRandom('')
      setSelectedOption('')
      window.location.reload();
      // display success message or perform other actions
    }

  }
  return (
    <form>
      <Box mb={2}>
        <h6 style={{ textAlign: "left", paddingLeft: "10px", color: '#707070' }}>Create Dataset</h6>
        <FormControl variant="filled" fullWidth
        >
          <InputLabel>Method</InputLabel>
          <Select value={selection} onChange={handleChange}>

            <MenuItem value="LDA">LDA method</MenuItem>
            {/* <MenuItem value="K-Means">K-Means method</MenuItem> */}
          </Select>
        </FormControl>
      </Box>

      {showSubForm && (
        <Box mb={2}>
          <div className='grid'>
            <Grid container alignItems="center" spacing={2} sx={{ marginTop: '5px' }} >
              <Grid item xs={2}>
                <label>Max df</label>
              </Grid>

              <Grid item xs={4}>

                <TextField
                  size="small"
                  style={{ height: '15px', width: '250px' }}
                  value={maxdf}
                  onChange={handleMax}
                />              
              </Grid>

              <br></br>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={5.5}>
             

                <Box sx={{ minWidth: 270, marginTop:"11px" }}>
                  <Card variant="outlined" sx={{fontSize:"11px"}}>
                    ignore texts that appear more than _% in the document, default value: [0.0, 1.0]
                    </Card>
                </Box>
              </Grid>
            </Grid>
          </div>
          <br />
          <div className='grid'>

            <Grid container alignItems="center" spacing={2} sx={{ marginTop: '-17px' }}>

              <Grid item xs={2}>
                <label>Min df</label>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  value={mindf}
                  onChange={handleMin}
                  style={{ height: '15px', width: '250px' }} />                </Grid>
            <Grid item xs={0.5}></Grid>
              <Grid item xs={5.5}>
                
                  
                <Box sx={{ minWidth: 250,marginTop:"12px" }}>
                  <Card variant="outlined" sx={{fontSize:"11px"}}>
                  ignore text that appears less than _% in the document, default value: 1
                    </Card>
                </Box>
         </Grid>
            </Grid>
          </div>
          <br />

          <Grid container alignItems="center" spacing={2} sx={{ marginTop: '-10px' }}>
            <Grid item xs={2}>
              <label>Component</label>
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                value={comp}
                onChange={handleComp}
                style={{ height: '10px', width: '250px' }} />
            </Grid>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={5.5}>
            <Box sx={{ minWidth: 250,marginTop:"9px"  }}>
                  <Card variant="outlined" sx={{fontSize:"11px"}}>
                  topic counts required (eg.15)
                    </Card>
                </Box>
            </Grid>
          </Grid>
          <br />

          <Grid container alignItems="center" spacing={2} sx={{ marginTop: '-10px' }}>
            <Grid item xs={2}>
              <label>Random State</label>
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={random}
                onChange={handleRandom}
                size="small"
                style={{ height: '0px', width: '250px' }} />
            </Grid>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={5.5}>
            <Box sx={{ minWidth: 250,marginTop:"11px"  }}>
                  <Card variant="outlined" sx={{fontSize:"11px"}}>
                  control the random initialization of the topic models , default value: integer
                    </Card>
                </Box>
            </Grid>
          </Grid>
          <br />
          <Grid container alignItems="center" spacing={2} sx={{ marginTop: '-10px' }} >
            <Grid item xs={2}>
              <label>Select Columns</label>
            </Grid>
            <Grid item xs={4} >
              <FormControl
                size="small"
                style={{ height: '0px', width: '250px' }}
              >
                {array.map((option) => (

                  <Select value={selectedOption} onChange={handleSelect}>
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
      <br />
      <div style={{ alignItems: "right" }}>
        <Button variant="contained" color="primary" onClick={Handlesubmit}>
          Create Dataset
        </Button>
      </div>

      <Backdrop open={isBackdropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>

    </form>
  );
}

