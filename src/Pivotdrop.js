import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';
import TableRenderers from 'react-pivottable/TableRenderers';
import { PivotData } from 'react-pivottable';
import { TableRowsOutlined } from '@mui/icons-material';
import { keyframes } from 'styled-components';
import { aggregators } from 'react-pivottable/Utilities';

function Pivotdrop(props) {
    let j = props
    let [i, setI] = useState([]);
    let [k, setK] = useState([]);
    const PlotlyRenderers = createPlotlyRenderers(Plot);


    useEffect(() => {
        Handletable();
    }, [j, i]);

    async function Handletable() {

        let response = await axios.get('http://localhost:5000/map_file')
            .then((response2) => {
                setI(response2.data)
            }
            )

        let response1 = axios.get('http://localhost:5000/pivot_select/' + path)
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

  return (
    <div className='pivot'>
    <PivotTableUI
            data={k}
            onChange={s => setK(s)}
            unusedOrientationCutoff={Infinity}
            renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
            {...k}     
            // {...this.state}  
           /> 
          </div>
  )
}

export default Pivotdrop