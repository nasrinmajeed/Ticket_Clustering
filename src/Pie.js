import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Pi() {

  const [k, setK] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [chart, setChart] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/plot_piechart') // replace with your Flask backend API endpoint
      .then((response) => {
        setK(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(k)
  return (
    <div>
{k}  
<img src={process.env.PUBLIC_URL + {k}} /> 


  </div>
     )
}

export default Pi