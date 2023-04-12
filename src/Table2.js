
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import axios from 'axios';//import AdvancedExample from './Pagination';


function createData(
    No: BigInteger,
    Column: String,
    Nonnull_count: String,
    DType: String
) {
    return { No, Column, Nonnull_count, DType };
}

export default function DenseTable() {

    let [type, setType] = useState([]);
    let [a, setA] = useState([]);
    let [b, setB] = useState([]);
    let [c, setC] = useState([]);
    let [mostRecentItem, setMost] = useState([]);
    let arr = []
    let filepath
  
    useEffect(() => {
    //   DenseTable();
      Handleapi();
    }, []);
  
  
    async function Handleapi() {
      // event.preventdefault()
      const response1 = await axios.get('http://localhost:3000/Projects')
        .then(response1 => {
          setType(response1.data[response1.data.length - 1])
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
  
  
    filepath = ("C:\\Users\\207065\\Desktop\\workspace\\backend\\Files\\" + c + "\\" +  a)
    
    let response2 = axios.get('http://localhost:5000/getdatatypes/' + filepath)
      .then((response2) =>
        setB(response2.data)
      )
  
    // console.log(b)
    let ar = [];
  
    for (let key in b) {
      if (Object.hasOwnProperty.call(b, key)) {
        ar.push(b[key])
      }
    }
    // console.log(ar)
     let arrtype = [];
          for(let i=0;i<ar.length;i++){
            arrtype = Object.keys(ar[i])
            break;
          }
    //  console.log(arrtype)

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

    const ellipsisStyle = {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '350px',
        maxWidth: '350px' }
           
    return (
        // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer >
            <Table stickyHeader size="small" aria-label="sticky table" className="table-scroll">
                <TableHead className="table2head">
                    <TableRow >
                        {/* <TableCell style={{fontSize: "0.75rem",fontWeight: 600}} >#</TableCell> */}
                        <TableCell  style={{fontSize: "0.75rem",height:"30px",fontWeight: 600, color: "#656363"}}>Column</TableCell>
                        {/* <TableCell  style={{fontSize: "0.75rem",fontWeight: 600}}>Nonnull_count</TableCell> */}
                        <TableCell  style={{fontSize: "0.75rem",fontWeight: 600, color: "#656363"}}>DType</TableCell>
                    </TableRow>
                                      {/* <TableHead sx={{ backgroundColor: "#f9f9fa"}} >
                              <TableRow sx={{ backgroundColor: "#f9f9fa"}}>
                                {
                                  Object.keys(arrtype).map((header) => (
                                    <TableCell key={header}
                                      sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600 , backgroundColor:"#f9f9fa" }} >{header}</TableCell>
                                  ))
                                }
                              </TableRow>
                            </TableHead> */}
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
               {arrtype.map((header) =>
                    
                  <TableCell align="left" style={ellipsisStyle} sx={{ fontSize: "0.8rem" }}>
                    {values[header]}</TableCell>   
                  )}            
                </TableRow>
                
              )
              
                
              )
            }
                </TableBody>
            </Table>
        </TableContainer>
        // </Paper>
    );
}
