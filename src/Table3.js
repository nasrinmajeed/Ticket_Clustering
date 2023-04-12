import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';//import AdvancedExample from './Pagination';
import ColorSchemesExample from './Navigationbar';
import TablePagination from '@mui/material/TablePagination';
import { borderColor } from '@mui/system';


function Tablesample() {

    // let [info, setInfo] = useState([]);
    // let [a, setA] = useState([]);
    let [b, setB] = useState([]);
    
    // let [mostRecentItem, setMost] = useState([]);
    // let arr = []
    // let filepath

  // console.log(props)
    useEffect(() => {
      async function Handleapi() {
        // event.preventdefault()
        const response2 = await axios.get('http://localhost:5000/getmappeddata')
        .then((response2) =>
          setB(response2.data)
        )
      };

      Handleapi();
    }, []);
  

  
    // filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
    
    // let response2 = axios.get('http://localhost:5000/getmappeddata/')
    //   .then((response2) =>
    //     setB(response2.data)
    //   )
  
    // console.log(b)
    let array = [];
  
    for (let key in b) {
      if (Object.hasOwnProperty.call(b, key)) {
        array.push(b[key])
      }
    }
    // console.log(array)
     let array1 = [];
          for(let i=0;i<array.length;i++){
            array1 = Object.keys(array[i])
            break;
          }
    //  console.log(array1)

  const columns = array1.map((col) =>{
      return{
        field: col,
        headerName: col,
        width: 150,
      }
    }
    )
  
    let uniqueID = 0;
    const rows = (Object.values(array)).map(row =>{
      ++uniqueID;
      row = {...row,uniqueID}
      return row
    })

    const ellipsisStyle = {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '350px',
        maxWidth: '350px' }

  // console.log(dataset)
  
  return (
    <>
      <TableContainer   sx={{
    height: 380 , 
    // border: "1px solid black"
  }}>
        <Table 
        // aria-label="a dense table" size="small"
        stickyHeader size="medium" aria-label="a dense table" height="20"
        >
          <TableHead sx={{ backgroundColor: "#f9f9fa"}} >
            <TableRow sx={{ backgroundColor: "#f9f9fa"}}>
              {
                Object.values(array1).map((header) => (
                  <TableCell key={header}
                    sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 , backgroundColor:"#f9f9fa" }} >{header}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {          
              Object.values(rows).map((values, data) =>(                              
                // console.log(values)      
                          
                <TableRow
                key={values.uniqueID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={values.uniqueID % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
               {array1.map((header) =>
                    
                  <TableCell  align="left" style={ellipsisStyle} sx={{ fontSize: "0.8rem" }}>
                    {values[header]}</TableCell>   
)}            
                </TableRow>
                
              )           
               
              )
            }

          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
    </>
  );
}

export default Tablesample;
