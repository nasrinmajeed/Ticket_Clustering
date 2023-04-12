import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box } from '@mui/system';



function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport sx={{color: "black", boxShadow: "2px 18px 20px #C8CACF", marginLeft: "900px"}} />
    </GridToolbarContainer>
  );
}


    // { field: 'id', headerName: 'ID', width: 90 },
    // {
    //   field: 'firstName',
    //   headerName: 'First name',
    //   width: 150,
    //   editable: true,
    // },
    // {
    //   field: 'lastName',
    //   headerName: 'Last name',
    //   width: 150,
    //   editable: true,
    // },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 110,
    //   editable: true,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },

  
  //const rows = [

    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  //];
export default function ExportCustomToolbar() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Netflix",
            {
                method: 'GET',
                //mode: 'no-cors',
                body: JSON.stringify(
                    Object
                ),
                headers: {
                    "Content-Type": "application/json",
                }

            })
            .then((res) => res.json()).then(dat => setDatas(dat)
            )
    }, []);
     console.log(datas)
    // console.log(Object.keys(datas[0]))
    let arra = [];
    for (let i = 0; i < datas.length; i++) {
        arra = Object.keys(datas[i])
        //console.log(arr)
        break;
    }
    console.log(arra)
          let arra1 = [];
          for (let i = 0; i < datas.length; i++) {
              arra1 = Object.values(datas[i])
              //console.log(arra1)
              //break;
          }

    // let [b,setB] = useState([]);
    // setB(Object.keys(datas))
    // console.log(b)


  
        
//     Object.keys(datas).map((key)=>
//         {field: key, headerName: key, width: 90}
//         )
  const columns = arra.map((col)=>{
    return{
        field: col,
        headerName: col,
    }
  }
  )
console.log(Object.values(datas))
let uniqID=0;

    const rows= (Object.values(datas)).map((row)=>{
      
      ++uniqID;
      row = {...row, uniqID}

      console.log(row)
      return row
        // field: row,
        // id: row.show_id,

    
  }

    )
  
console.log("Rows",rows)
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        //columns= {[{ field: values}]}
        columns={columns}
        getRowId={(row) => row.uniqID}
        sx={{
          root: {
            "& .MuiDataGrid-renderingZone": {
              "& .MuiDataGrid-row": {
                "&:nth-child(2n)": { 
                  backgroundColor: "#dedee4" 
                }
              }
            }
          },
          
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            "& .MuiDataGrid-row": {
              "&:nth-child(2n)": { backgroundColor: "#f8f8fa" }
            }
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f8f8fa",
            color: "#656363",
            fontSize: 16
          }
        }}
        //pageSize={10}
        //rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
        components={{Toolbar: CustomToolbar}}
      />
    </Box>
  );
}




// import React, { useState, useEffect } from 'react'
// import { DataGrid } from '@mui/x-data-grid'

// const columns = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'title', headerName: 'Title', width: 300 },
//   { field: 'body', headerName: 'Body', width: 600 }
// ]

// export default function Datagrid() {

//   const [tableData, setTableData] = useState([])

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((data) => data.json())
//       .then((data) => setTableData(data))

//   }, [])

//   console.log(tableData)

//   return (
//     <div style={{ height: 700, width: '100%' }}>
//       <DataGrid
//         rows={tableData}
//         columns={columns}
//         pageSize={12}
//       />
//     </div>
//   )
// }

