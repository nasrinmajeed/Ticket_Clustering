// import { Col, Row } from 'react-bootstrap';
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
import axios from 'axios';//import AdvancedExample from './Pagination';
import ColorSchemesExample from './Navigationbar';
import TablePagination from '@mui/material/TablePagination';
import { borderColor } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     '&::-webkit-scrollbar': {
//       width: '0.4em',
//     },
//     '&::-webkit-scrollbar-track': {
//       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
//     },
//     '&::-webkit-scrollbar-thumb': {
//       backgroundColor: '#3f51b5',
//       outline: '1px solid slategrey',
//     },
//   },
// });

function Tablesample() {
    // const classes = useStyles();


    let [info, setInfo] = useState([]);
    let [a, setA] = useState([]);
    let [b, setB] = useState([]);
    let [c, setC] = useState([]);
    let [mostRecentItem, setMost] = useState([]);
    let arr = []
    let filepath
  
    useEffect(() => {
      // Tablesample
      Handleapi();
    }, []);
  
  
    async function Handleapi() {
      // event.preventdefault()
      const response1 = await axios.get('http://localhost:3000/Projects')
        .then(response1 => {
          setInfo(response1.data[response1.data.length - 1])
          setA(response1.data[response1.data.length - 1].Filename)
          // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
        }
        )

      const response = await axios.get('http://localhost:5000/recent_folder')
      .then(response => {
        setC(response.data)
      }
      )  
      }
  

    // console.log(c)
    filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + c + "\\" +  a)
    
    let response2 = axios.get('http://localhost:5000/getdata/' + filepath)
      .then((response2) =>
        setB(response2.data)
      )
  
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
        width: '370px',
        maxWidth: '370px' }
  
  return (
    <>
      <TableContainer 
      // component={Paper}
    sx={{
    height: 390, 
    // border: "1px solid black"
  }}>
        <Table 
        // className={classes.root}
        // style={{ overflowY: 'scroll', maxHeight: '400px', borderCollapse: 'collapse', borderSpacing: 0 }}
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


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './App.css';
// // import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import React,{useEffect, useState} from 'react';
// import { DataGrid, gridClasses } from '@mui/x-data-grid';
// import { alpha, styled } from '@mui/material/styles';


// export default function DataGridDemo() {
//   let [info, setInfo] = useState([]);
//   let [a, setA] = useState([]);
//   let [b, setB] = useState([]);
//   let [mostRecentItem, setMost] = useState([]);
//   let arr = []
//   let filepath

//   useEffect(() => {
//     DataGridDemo;
//     Handleapi();
//   }, []);


//   async function Handleapi() {
//     // event.preventdefault()
//     const response1 = await axios.get('http://localhost:3000/Projects')
//       .then(response1 => {
//         setInfo(response1.data[response1.data.length - 1])
//         setA(response1.data[response1.data.length - 1].File_guidname)
//         // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
//       }
//       )}


//   filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
  
//   let response2 = axios.get('http://localhost:5000/getdata/' + filepath)
//     .then((response2) =>
//       setB(response2.data)
//     )

//     // console.log(b)
//   let array = [];

//   for (let key in b) {
//     if (Object.hasOwnProperty.call(b, key)) {
//       array.push(b[key])
//     }
//   }
//   // console.log(array)
//    let array1 = [];
//         for(let i=0;i<array.length;i++){
//           array1 = Object.keys(array[i])
//           break;
//         }
// // console.log(array1)
// const columns = array1.map((col) =>{
//     return{
//       field: col,
//       headerName: col,
//       width: 150,
//     }
//   }
//   )

//   let uniqueID = 0;
//   const rows = (Object.values(array)).map(row =>{
//     ++uniqueID;
//     row = {...row,uniqueID}
//     return row
//   })


// // const ODD_OPACITY = 0.5;

// // const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
// //   [`& .${gridClasses.row}.odd`]: {
// //     backgroundColor: "#F9F9FA",
// //     '&:hover, &.Mui-hovered': {
// //       backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
// //       '@media (hover: none)': {
// //         backgroundColor: 'transparent',
// //       },
// //     },
// //     '&.Mui-selected': {
// //       backgroundColor: alpha(
// //         theme.palette.primary.main,
// //         ODD_OPACITY + theme.palette.action.selectedOpacity,
// //       ),
// //       '&:hover, &.Mui-hovered': {
// //         backgroundColor: alpha(
// //           theme.palette.primary.main,
// //           ODD_OPACITY +
// //             theme.palette.action.selectedOpacity +
// //             theme.palette.action.hoverOpacity,
// //         ),
// //         // Reset on touch devices, it doesn't add specificity
// //         '@media (hover: none)': {
// //           backgroundColor: alpha(
// //             theme.palette.primary.main,
// //             ODD_OPACITY + theme.palette.action.selectedOpacity,
// //           ),
// //         },
// //       },
// //     },
// //   },
// // }));

//   return (
//     <Box className="MuiDataGrid-colCell" sx={{ height:350, width: '100%' }}>
//      <div  style={{ height: '100%', width: '100%' }}>
//       <DataGrid
//         className="MuiDataGrid-colCell"
//         rows={rows}
//         columns={columns}
//         getRowId={(row)=>row.uniqueID}
//         pageSize={[15]}
//         rowsPerPageOptions={[5]}
//         // hideFooterPagination={true}
//         // experimentalFeatures={{ newEditingApi: true }}
//         sx={{        
//           borderColor: 'black',
//           '& .MuiDataGrid-cell:hover': {
//           color: 'primary.main',
//           },
//         }}

//       />
//       </div>
//     </Box>
//   );
// }