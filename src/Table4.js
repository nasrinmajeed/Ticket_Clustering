import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Table4(props) {
    let j = props
    let [i, setI] = useState([]);
    let [k, setK] = useState([]);

    //   let [path, setPath] = useState('');


    useEffect(() => {
        Handletable();
    }, [j, i]);

    async function Handletable() {

        let response = await axios.get('http://localhost:5000/map_file')
            .then((response2) => {
                setI(response2.data)
            }
            )

        let response1 = axios.get('http://localhost:5000/projectstudio_table/' + path)
            .then((response2) =>
                setK(response2.data)
            )

    }

    //   console.log(i)
    //   console.log(j.value)
    let path = i + "\\" + (j.value)
    //   setPath(i +  "\\"  + (j.value))

    console.log(path)
    console.log(k)

    let array = [];

    for (let key in k) {
        if (Object.hasOwnProperty.call(k, key)) {
            array.push(k[key])
        }
    }
    // console.log(array)
    let array1 = [];
    for (let i = 0; i < array.length; i++) {
        array1 = Object.keys(array[i])
        break;
    }

    let uniqueID = 0;
    const rows = (Object.values(array)).map(row => {
        ++uniqueID;
        row = { ...row, uniqueID }
        return row
    })

    const ellipsisStyle = {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '350px',
        maxWidth: '350px'
    }



    return (
        <div>
            <TableContainer sx={{
                height: 380,
                // border: "1px solid black"
            }}>
                <Table
                    // aria-label="a dense table" size="small"
                    stickyHeader size="medium" aria-label="a dense table" height="20"
                >
                    <TableHead sx={{ backgroundColor: "#f9f9fa" }} >
                        <TableRow sx={{ backgroundColor: "#f9f9fa" }}>
                            {
                                Object.values(array1).map((header) => (
                                    <TableCell key={header}
                                        sx={{ fontSize: "0.8rem", color: "#656363", fontWeight: 600, backgroundColor: "#f9f9fa" }} >{header}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.values(rows).map((values, data) => (
                                // console.log(values)      

                                <TableRow
                                    key={values.uniqueID}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={values.uniqueID % 2 ? { background: "white" } : { background: "#f9f9fa" }}
                                >
                                    {array1.map((header) =>

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
        </div>
    )
}

export default Table4
