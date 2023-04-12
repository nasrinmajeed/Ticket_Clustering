import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
//import Plotly from "plotly.js";
//import createPlotlyComponent from "react-plotly.js/factory";
import * as d3 from 'd3';
//const Plot = createPlotlyComponent(Plotly);]

export default function TreeMap() {
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
            .then((res) => res.json()).then(dat => setDatas(dat))

    }, []);
    //const temp = datas.map((d)=>d.show_id)
    let arr = [];
    for (let i = 0; i < datas.length; i++) {
        arr = Object.keys(datas[i])
        //console.log(arr)
        break;
    }
function getData(datas,rows) {
    function unpack(rows, key){
    return rows.map(function(row) { return row[key]});
    }
}
    let count_1940 = 0;
    let count_1950 = 0;
    let count_1960 = 0;
    let count_1970 = 0;
    let count_1980 = 0;
    let count_1990 = 0;
    let count_2000 = 0;
    let count_2010 = 0;
    let count_2020 = 0;
    datas.forEach(element => {
        if (element.release_year >= 1940 && element.release_year <= 1950) {
            count_1940 = count_1940 + 1;
        }
        else if (element.release_year > 1950 && element.release_year <= 1960) {
            count_1950 = count_1950 + 1;
        }
        else if (element.release_year > 1960 && element.release_year <= 1970) {
            count_1960 = count_1960 + 1;
        }
        else if (element.release_year > 1970 && element.release_year <= 1980) {
            count_1970 = count_1970 + 1;
        }
        else if (element.release_year > 1980 && element.release_year <= 1990) {
            count_1980 = count_1980 + 1;
        }
        else if (element.release_year > 1990 && element.release_year <= 2000) {
            count_1990 = count_1990 + 1;
        }
        else if (element.release_year > 2000 && element.release_year <= 2010) {
            count_2000 = count_2000 + 1;
        }
        else if (element.release_year > 2010 && element.release_year <= 2020) {
            count_2010 = count_2010 + 1;
        }
        else if (element.release_year > 2020 && element.release_year <= 2030) {
            count_2020 = count_2020 + 1;
        }


    });
    console.log(arr)
    var distinctValues = [];
    distinctValues.push(new Set(arr));
    console.log(distinctValues);
    console.log(datas);
    console.log(Object.keys(datas))
    console.log(datas.show_id)
   
    // distinctReleaseyr.push(new Set (releaseyr_arr))
    // console.log(distinctReleaseyr)

    // console.log(distinctValues.forEach(ele=>{return ele}))
    //console.log("heloo",Object.keys(datas))
    let show_id_arr = [];
    show_id_arr = datas.map((d) => d.show_id);
    let type_arr = [];
    type_arr = datas.map((d) => d.type);
    let title_arr = [];
    title_arr = datas.map((d) => d.title);
    let director_arr = [];
    director_arr = datas.map((d) => d.director);
    let cast_arr = [];
    cast_arr = datas.map((d) => d.cast);
    let country_arr = [];
    country_arr = datas.map((d) => d.country);
    let dateadded_arr = [];
    dateadded_arr = datas.map((d) => d.date_added);
    let releaseyr_arr = [];
    releaseyr_arr = datas.map((d) => d.release_year);
    let rating_arr = [];
    rating_arr = datas.map((d) => d.rating);
    let duration_arr = [];
    duration_arr = datas.map((d) => d.duration);
    let listed_arr = [];
    listed_arr = datas.map((d) => d.listed_in);
    let desc_arr = [];
    desc_arr = datas.map((d) => d.description);
    console.log(releaseyr_arr)
    let distinctReleaseyr =[...new Set(releaseyr_arr)];
    
    console.log(distinctReleaseyr)

    // let preg = datas.map((d)=>d.Pregnancies);
    // let gluc = datas.map((d)=>d.Glucose);
    // let blood = datas.map((d)=>d.BloodPressure);
    // let skin = datas.map((d)=>d.SkinThickness);
    // let insulin = datas.map((d)=>d.Insulin);
    // let bmi = datas.map((d)=>d.BMI);
    // let diabetesPedigree = datas.map((d)=>d.DiabetesPedigreeFunction);
    // let age = datas.map((d)=>d.Age);
    // let outcome = datas.map((d)=>d.Outcome);








    //console.log(preg)
    //console.log(values);

    //    const layout ={
    //     title: "My Treemap",
    //     height: 1000,
    //     width: 800,
    //        treemap:{
    //         type: "squarify",
    //            labels: distinctValues.forEach(element => {return element}),
    //            parents: Array(datas.length).fill(""),
    //            values: values,

    //        }
    //   };
    const layout = {
        title: 'Release Year',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        //height: 900
    };

    return (

        <Plot
            var data={[{
                //   type: "treemap",
                //   labels: Object.keys(datas),
                //   labels: distinctValues,
                //   parents: Array(datas.length).fill(""),
                //   values:  values,
                type: "treemap",
                labels: ["release-year", "1940-1950", "1950-1960", "1960-1970", "1970-1980", "1980-1990", "1990-2000", "2000-2010", "2010-2020", "2020-2030"],
                parents: ["", "release-year", "release-year", "release-year", "release-year", "release-year", "release-year", "release-year", "release-year", "release-year"],
                values: ["8807", count_1940, count_1950, count_1960, count_1970, count_1980, count_1990, count_2000, count_2010, count_2020],

            },
            ]}
            layout={layout}
        />

    )
}


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Plotly from "plotly.js";
// import createPlotlyComponent from "react-plotly.js/factory";

// const Plot = createPlotlyComponent(Plotly);

// const MyTreemap = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => setData(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const values = data.map((d) => d.id);
//   console.log(values)
//   const layout = {
//     title: "My Treemap",
//     height: 500,
//     width: 500,
//     treemap: {
//       type: "squarify",
//       labels: data.map((d) => d.title),
//       parents: Array(data.length).fill(""),
//       values: values,
//     },
//   };

//   return (
//     <Plot
//       data={[
//         {
//           type: "treemap",
//           labels: data.map((d) => d.title),
//           parents: Array(data.length).fill(""),
//           values: values,
//         },
//       ]}
//       layout={layout}
//     />
//   );
// };

// export default MyTreemap;
