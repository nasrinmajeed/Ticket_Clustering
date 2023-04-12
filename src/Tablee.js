import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import BasicSelect from './Upload';
import axios from 'axios';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            valueId: [],
            otherValues:[],
            a:[],
            file:[],
            ex:[],  
          };
      }


componentDidMount() {
  
          fetch('http://localhost:3000/Projects')
          .then(response => response.json())
          .then(data => {
            let mostRecentItem = data[data.length - 1];  // Get the last item in the array
            this.setState({valueId: mostRecentItem.id})
            this.setState({otherValues: mostRecentItem.Filename})
            // console.log(mostRecentItem.id);  // Log the ID of the most recent item
            // console.log(mostRecentItem.Filename);  // Log the entire object for the most recent item   
          })
          .catch(error => {
            console.error(error); })
        
         }               
  
 
      
//       }
// fetchData()
        

//console.log(data)
// console.log(a)
// console.log(valueId)
// console.log(otherValues)

render() {
let { info } = this.state;
let { valueId} = this.state;
let { otherValues } = this.state;
console.log(info)

const file_path = ( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + otherValues)
console.log(file_path)
          
  axios.get('http://localhost:5000/getdata/'+ file_path)
  .then(
    (response) => {                       
        this.setState({info: response.data})
  })        
  .catch(err => {
    console.error(err);
  });
          
  const returnedArray = Array.from(info)
    return (
    <>
    
      {/* <div>
      <p>ID of the last value: {valueId}</p>
      <p>Other values: {otherValues}</p>
    </div> */}
    <TableContainer component={Paper}>
        <Table aria-label="a dense table" size="medium">
          <TableHead >
            <TableRow style={{ backgroundColor: "#f9f9fa" }}>
              {
                Object.keys(info[0] || {}).map(header => (
                  <TableCell key={header}
                  sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }} >{header}</TableCell>
                ))
              }
            
              {/* <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }}>Sys_updated</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow style={{ backgroundColor: "#f9f9fa" }}>
              {
                Object.values(info).map((header, a)=> (
                  <TableCell key={a} 
                  sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }} >{header}</TableCell>
                ))
              }
            
              {/* <TableCell sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }}>Sys_updated</TableCell> */}
            </TableRow>
            {/* {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={index % 2 ? { background: "#f9f9fa" } : { background: "white" }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: "0.8rem" }}>
                  {row.Number}&nbsp;
                </TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Priority}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Sys_created_on}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Opened_at}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Caller_id}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.State}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Category}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Assignment_grp}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Short_description}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Assigned_to}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem" }}>{row.Sys_updated}</TableCell>
              </TableRow>
            ))} */}
                              {/* {
                              info.map((row, index) => (
                                <TableRow 
                                  // key={index} 
                                  key={row}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  style={index % 2 ? { background: "#f9f9fa" } : { background: "white" }}>
                                  {
                                    Object.values(row).map((cell, cellIndex) => (
                                      <TableCell key={cellIndex} sx={{ fontSize: "0.8rem" }}>{cell}</TableCell>
                                    ))
                                  }
                                      </TableRow>
                                    ))
                                  } */}



          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <br/>
    </>
  );

}
}
export default MyComponent;