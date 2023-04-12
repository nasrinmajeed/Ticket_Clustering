//import { Col, Row } from 'react-bootstrap';
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useState, useEffect } from 'react';
// import BasicSelect from './Upload';
// import axios from 'axios';//import AdvancedExample from './Pagination';
// import ColorSchemesExample from './Navigationbar';




// function DenseTable() {

//   let [info, setInfo] = React.useState([]);
//   let [a, setA] = React.useState([]);
//   let [b, setB] = React.useState([]);
//   let [mostRecentItem, setMost] = React.useState([]);
//   let arr = []
//   let filepath

//   // useEffect(() => {
//   //   axios.get('http://localhost:3000/Projects/')
//   //     .then(res => {
//   //       setInfo(res.data);
//   //     })
//   //     .catch(err => {
//   //       console.error(err);
//   //     });
//   // }, []);


//   useEffect(() => {
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
//       )

//     // setA(mostRecentItem => )
//     // setInfo(response1.data);
//     // console.log(info)


//     //   fetch('http://localhost:3000/Projects')
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     let mostRecentItem = data[data.length - 1];  // Get the last item in the array
//     //     setInfo( (mostRecentItem))
//     //     a = mostRecentItem
//     //     console.log(mostRecentItem)
//     //     console.log(a)
//     //     console.log(mostRecentItem.id);  // Log the ID of the most recent item
//     //     console.log(mostRecentItem.Files.Filename);  // Log the entire object for the most recent item   
//     //   })
//     //   .catch(error => {
//     //     console.error(error); })
//     // console.log(a)
//     // const response1 = await axios.get('http://localhost:3000/Projects/') 
//     // setInfo(response1.data);
//     // const latestEntry = info[info.length - 1];
//     // // const id = latestEntry.id;
//     // // const otherFields = latestEntry.Filename;

//     // axios.post('http://127.0.0.1:5000/file-upload', formData) 
//     // .then(response => {  
//     //   setInfo(response.data);
//     //   console.log(info);
//     //   }
//     //   )

//     // const response2 = await get('http://localhost:3000/Projects/', {
//     //   method: 'POST',
//     //   body: JSON.stringify(
//     //     (Files)
//     //   ),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // }
//     // )
//     //   .then(res => {
//     //     if (res.status === 201) {
//     //       alert('File uploaded!')
//     //       // setName('');
//     //       // setDes('')
//     //       // setTicket(null)
//     //       // setFile('')
//     //     }
//     //   }     
//     //  )


//   }
//   filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
  
//   let response2 = axios.get('http://localhost:5000/getdata/' + filepath)
//     .then((response2) =>
//       setB(response2.data)
//       // setB([...b, response2.data]);  
//     )
  

//   for (let key in b) {
//     if (Object.hasOwnProperty.call(b, key)) {
//       arr.push(b[key])
//     }
//   }
// let uniqueID = 0;
// let rowValues = arr.map(( values) => {

//   ++uniqueID;
//   values ={...values,uniqueID}
//   //console.log(values)
//   return values
// })
// console.log(rowValues)



  // console.log(arr)
//   // var file_path = 'C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\{otherValues.Filename}'
//   return (
//     <>

//       {/* <div>
//       <p>ID of the last value: {valueId}</p>
//       <p>Other values: {otherValues}</p>
//     </div> */}
//       <TableContainer component={Paper}>
//         <Table aria-label="a dense table" size="medium">
//           <TableHead >
//             <TableRow style={{ backgroundColor: "#f9f9fa" }}>
//               {
//                 Object.keys((arr[0] || {})).map((header) => (
//                   <TableCell key={header}
//                     sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 }} >{header}</TableCell>
//                 ))
//               }
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {          
//               rowValues.map((values) =>(                              
//                 // console.log(values)                
//                 <TableRow
//                 key={values.uniqueID}
//                 // // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 // // style={index % 2 ? { background: "#f9f9fa" } : { background: "white" }}
//                 >
//                   <TableCell sx={{ fontSize: "0.8rem" }}>
//                     {values.Number}</TableCell>               
//                 </TableRow>
                
//               )
              
                
//               )
//             }



//           </TableBody>
//         </Table>
//       </TableContainer>
//       <br />
//       <br />
//     </>
//   );
// }

// export default DenseTable;
// import * as React from 'react';
import Box from '@mui/material/Box';
import './App.css';
// import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';


export default function DataGridDemo() {
  let [info, setInfo] = useState([]);
  let [a, setA] = useState([]);
  let [b, setB] = useState([]);
  let [mostRecentItem, setMost] = useState([]);
  let arr = []
  let filepath

  useEffect(() => {
    // DataGridDemo;
    Handleapi();
  }, []);


  async function Handleapi() {
    // event.preventdefault()
    const response1 = await axios.get('http://localhost:3000/Projects')
      .then(response1 => {
        setInfo(response1.data[response1.data.length - 1])
        setA(response1.data[response1.data.length - 1].File_guidname)
        // setFilepath( "C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
      }
      )}


  filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + a)
  
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
// console.log(array1)
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


// const ODD_OPACITY = 0.5;

// const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
//   [`& .${gridClasses.row}.odd`]: {
//     backgroundColor: "#F9F9FA",
//     '&:hover, &.Mui-hovered': {
//       backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
//       '@media (hover: none)': {
//         backgroundColor: 'transparent',
//       },
//     },
//     '&.Mui-selected': {
//       backgroundColor: alpha(
//         theme.palette.primary.main,
//         ODD_OPACITY + theme.palette.action.selectedOpacity,
//       ),
//       '&:hover, &.Mui-hovered': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           ODD_OPACITY +
//             theme.palette.action.selectedOpacity +
//             theme.palette.action.hoverOpacity,
//         ),
//         // Reset on touch devices, it doesn't add specificity
//         '@media (hover: none)': {
//           backgroundColor: alpha(
//             theme.palette.primary.main,
//             ODD_OPACITY + theme.palette.action.selectedOpacity,
//           ),
//         },
//       },
//     },
//   },
// }));

  return (
    <Box className="MuiDataGrid-colCell" sx={{ height:350, width: '100%' }}>
     <div  style={{ height: '100%', width: '100%' }}>
      <DataGrid
        className="MuiDataGrid-colCell"
        rows={rows}
        columns={columns}
        getRowId={(row)=>row.uniqueID}
        pageSize={[15]}
        rowsPerPageOptions={[5]}
        // hideFooterPagination={true}
        // experimentalFeatures={{ newEditingApi: true }}
        sx={{        
          borderColor: 'black',
          '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
          },
        }}

      />
      </div>
    </Box>
  );
}