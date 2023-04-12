import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function DescribeTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/describe')
      .then(response => {
        // Convert the JSON object to an array of objects
        const dataArray = Object.values(response.data);
        setData(dataArray);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const ellipsisStyle = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '350px',
    maxWidth: '350px'
  }   
  
  // Get the columns from the first object in the data array, and move "Statistics" to the front of the array
  const columns = Object.keys(data[0] || {}).sort((a, b) => a === 'Statistics' ? -1 : b === 'Statistics' ? 1 : 0);

  return (
    <TableContainer >
      <Table stickyHeader size="small" aria-label="sticky table" className="tablerow1 td" >
        <TableHead className='tablehead' >
          <TableRow>
            {columns.map(column => (
              <TableCell key={column} 
              style={{fontSize: "0.75rem",fontWeight: 600,background:"white", color:"#656363"}}
              >{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
            >
              {columns.map(column => (
                <TableCell key={column} 
                align="left" style={ellipsisStyle} sx={{ fontSize: "0.7rem" }}>
                  {row[column] !== null ? row[column]: "-"}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DescribeTable;
