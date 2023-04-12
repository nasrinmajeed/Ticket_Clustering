
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const TreeMapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/gt_tree')
      .then(res => {
        const newData = res.data;
        console.log(res.data)
        console.log(newData)
        // Map the data to the format expected by Plotly Treemap
        const mappedData = {
          type: 'treemap',
          labels: [],
          parents: [],
          values: [],
          text: [],
        };

        newData.forEach(row => {
          const topic = row['top_words'];
          const subtopic = row['Cleaned_Column'];
          const value = row['topic'];
          const subtopic_words = row['subtopic_name']
          const percent = row['topic_percent'];
          const final = row['Final_cleaned']

          // Check if topic already exists in the data array
          const existingTopicIndex = mappedData.labels.indexOf(topic);
          if (existingTopicIndex !== -1) {
            // If the topic exists, add the subtopic as a child of the topic
            mappedData.labels.push(subtopic);
            mappedData.parents.push(topic);
            mappedData.values.push(value);
            mappedData.text.push(`Topic: ${topic} <br>Topic Number:${value} <br>Topic_Percent: ${percent} `);

          } else {
            // If the topic does not exist, add the topic to the data array and
            // add the subtopic as a child of the topic
            mappedData.labels.push(topic);
            mappedData.parents.push('');
            mappedData.values.push(value);
            mappedData.text.push(`Topic Number:${value} <br>Topic: ${topic}  `);

          
            mappedData.labels.push(subtopic);
            mappedData.parents.push(topic);
            mappedData.values.push(value);
            mappedData.text.push(`Topic: ${topic}  <br>Topic_Percent: ${percent}`);
            
          }
        });
        console.log(mappedData.parents)
        console.log(mappedData.values)
        setData([{
          type: "treemap",
          maxdepth:5,
          text: mappedData.text,
          labels: mappedData.labels,
          parents: mappedData.parents,
          values: mappedData.values,
          // marker: {
          //   colors: ["rgb(124, 179, 66)", "rgb(31, 150, 215)", "rgb(255, 225, 0)", "rgb(255, 105, 180)", "rgb(133, 20, 75)", "rgb(0, 116, 217)"
          // , "rgb(0, 113, 217)", "rgb(34, 116, 217)", "rgb(66, 116, 217)", "rgb(87, 116, 217)"]
          // }
        }]);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(data)
const layout = {
    // title: 'Topic Distribution',
    // autosize: true,
    height: "400",
    width:"800",
    margin: { t: 1, b: 40, l: 5, r: 40 },
    // marker: {
    //   colors: 'Blues'
    // },
    hovermode: 'closest',
  //  treemapcolorway: ['rgb(17, 157, 255)', 'rgb(69, 179, 157)', 'rgb(200, 214, 92)', 'rgb(255, 217, 102)'],
    pathbar: {
      visible: true
    }
  };

  return (
  <div>
  <Plot data={data} layout={layout} />
  </div>
  )
  ;
};

export default TreeMapChart;