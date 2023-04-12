import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import { areArraysEqual } from "@mui/base";
import { Grid, Paper } from '@material-ui/core';

function Tablestat(props) {
  const [data, setData] = useState([]);
  let j = props
  let [i, setI] = useState([]);
  let [k, setK] = useState([]);

  useEffect(() => {

    const fetchData = async () => {  
        let response = await axios.get('http://localhost:5000/map_file')
            .then((response2) => {
                setI(response2.data)
            }
            )
        let response1 = axios.get('http://localhost:5000/describ/' + path)
            .then((response2) =>
                setData(response2.data)
            )
    };

    fetchData();
  }, []);

  let path = i + "\\" + (j.value)
    //   setPath(i +  "\\"  + (j.value))
console.log(i)
  console.log(path)
  console.log(k)


   console.log(data)

   let ar = [];
  
    for (let key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        ar.push(data[key])
      }
    }
    console.log(ar)

     function createData(name) {
    return { name};
  }

  const vals = [
    createData('25%'),
    createData('50%'),
    createData('75%'),
    createData('count'),
    createData('freq'),
    createData('max'),
    createData('mean'),
    createData('min'),
    createData('std'),
    createData('top'),
    createData('unique'),
   
  ];

  const staticData = [
    { id: 1, label: '25%' },
    { id: 2, label: '50%' },
    { id: 3, label: '75%' },
    { id: 4, label: 'count' },
    { id: 5, label: 'freq' },
    { id: 6, label: 'max' },
    { id: 7, label: 'mean' },
    { id: 8, label: 'min' },
    { id: 9, label: 'std' },
    { id: 10, label: 'top' },
    { id: 11, label: 'unique' },


  ];

  const stat = ar.map((item) => {
    return [...vals, item];
  });

console.log(stat)
    let arrtype = [];
          for(let i=0;i<ar.length;i++){
            arrtype = Object.keys(ar[i])
            break;
          }
 console.log(arrtype)

  const columns = arrtype.map((col) =>{
      return{
        field: col,
        headerName: col,
        width: 150,
      }
    }
    )
  
    let uniqueID = 0;
    const rows = (Object.values(ar)).map(row =>{
      ++uniqueID;
      row = {...row,uniqueID}
      return row
    })
console.log(rows)

  return (
    <div>
<Grid container spacing={2} >
<Grid item xs={2} >
<TableContainer sx={{
                // height: 380,
                // border: "1px solid black"
            }}>
                <Table
                    // aria-label="a dense table" size="small"
                    stickyHeader size="small" aria-label="a dense table" height="20"  

                >
                    <TableHead sx={{ backgroundColor: "#f9f9fa" }} >
                    <TableRow sx={{ backgroundColor: "#f9f9fa", height:61 }}>
                    <TableCell 
                      sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600, backgroundColor: "#f9f9fa" }} >Statistics</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>

                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    25%</TableCell>
                </TableRow>
                <TableRow
                  sx={{ backgroundColor: "#f9f9fa",'&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ color: "#656363", fontSize: "0.8rem" }}>
                    50%</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    75%</TableCell>
                </TableRow>
                <TableRow
                  sx={{ backgroundColor: "#f9f9fa",'&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    count</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    freq</TableCell>
                </TableRow>
                <TableRow
                  sx={{backgroundColor: "#f9f9fa", '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    max</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    mean</TableCell>
                </TableRow>
                <TableRow
                  sx={{backgroundColor: "#f9f9fa", '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    min</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    std</TableCell>
                </TableRow>
                <TableRow
                  sx={{  backgroundColor: "#f9f9fa",height:121 , '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    top</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                // style={index % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                >
                  <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                    unique</TableCell>
                </TableRow>
                

                        

                    </TableBody>
                </Table>
            </TableContainer>

</Grid>
    <Grid item xs={10}>
    <TableContainer sx={{
                // height: 380,
                // border: "1px solid black"
            }}>
                <Table
                    // aria-label="a dense table" size="small"
                    stickyHeader size="small" aria-label="a dense table" height="20"
                >
                    <TableHead sx={{ backgroundColor: "#f9f9fa" }} >
                        <TableRow sx={{ backgroundColor: "#f9f9fa" }}>
                            {
                                Object.values(arrtype).map((header) => (
                                    <TableCell key={header}
                                        sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600, backgroundColor: "#f9f9fa" }} >{header}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {/* {staticData.map((staticItem, index) => (
            <TableRow key={staticItem.id}>
              <TableCell>{staticItem.label}</TableCell>
            </TableRow>
          ))} */}

                        {
                           
                             Object.values(rows).map((values, data) => (
                                // console.log(values)      

                                <TableRow 
                                
                                    key={values.uniqueID}
                                    sx={{height:10, '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={values.uniqueID % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                                >
                                   
                                    {arrtype.map((header) =>

                                        <TableCell align="left" sx={{ fontSize: "0.8rem" }}>
                                            {values[header] !== null ? values[header]: "-" }</TableCell>
                                    )}
                                </TableRow>

                            )

                            )
                            }
                        

                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            </Grid>

</div>
  )
}

export default Tablestat