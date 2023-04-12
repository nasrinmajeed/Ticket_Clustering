import React, { useState, useEffect } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';
import TableRenderers from 'react-pivottable/TableRenderers';
import axios from 'axios';
import { PivotData } from 'react-pivottable';
import { TableRowsOutlined } from '@mui/icons-material';
import { keyframes } from 'styled-components';
import { aggregators } from 'react-pivottable/Utilities';

export default function Pivot() {
  const [csvData, setCsvData] = useState([]);
  const PlotlyRenderers = createPlotlyRenderers(Plot);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/csv_data')
      setCsvData((response.data))
      console.log(response)
    };

    fetchData();
  }, []);
  console.log(csvData)
  

  

  let array = [];
  
  for (let key in csvData) {
    if (Object.hasOwnProperty.call(csvData, key)) {
      array.push(csvData[key])
    }
  }

  console.log(array)

  let arrtype = [];
  for(let i=0;i<array.length;i++){
    arrtype = Object.keys(array[i])
    break;
  }

console.log(arrtype)

let uniqueID = 0;
const rows = (Object.values(array)).map(row =>{
  ++uniqueID;
  row = {...row,uniqueID}
  return row
})


const columns = arrtype.map((col) =>{
  return{
    field: col,
    headerName: col,
    width: 150,
  }
}
)
// define the aggregator based on the data type


return (
  <div className='pivot'>
<PivotTableUI
        data={csvData}
        onChange={s => setCsvData(s)}
        // unusedOrientationCutoff={Infinity}
        renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
        {...csvData}     
        // {...this.state}  
       /> 
      </div>
  );
}


