import React from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import BasicSelect from './Drop';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { borderColor } from '@mui/system';
import DenseTable from './Table1';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Createdataset from './Createdataset';
import Table3 from './Table3';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import Table4 from './Table4';
import { Link } from 'react-router-dom';
import Pivot from './Pivot';
import { saveAs } from 'file-saver';
import Pi from './Pie';
import Pivotdrop from './Pivotdrop';
import Tree from './Tree';
import Tablestat from './Tablestat';
import Tablestatistics from './Tablestatistics'
import Tableinfo from './Tableinfo';
import Createcolumns from './Createcolumns';
import download from 'downloadjs';
import axios from 'axios';
import * as FileSaver from 'file-saver';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 820,
    // height:1000,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function createData(names) {
    return { names };
}



export default function Projectstudio() {
    const [drop, setDrop] = React.useState('');
    const [url, setUrl] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [op, setOp] = React.useState(false);
    let [i, setI] = React.useState([]);
    let [k, setK] = React.useState([]);
    const [activeButton, setActiveButton] = React.useState(null);
    const handleOpen = (componentNumber) => {
        setActiveComponent(componentNumber);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleOp = (componentNumber) => {
        setActiveComponent(componentNumber);
        setOp(true)
    };
    const handleCl = () => setOp(false);

    const [selectedValue, setSelectedValue] = React.useState('');

    const [dataset, setDataset] = React.useState('');
    // <Table3 dataset={dataset} />

    let [proj, setProj] = React.useState([]);
    const [activeComponent, setActiveComponent] = React.useState(1);

    const handleClick = (componentNumber) => {
        setActiveComponent(componentNumber);
        
    };

    const exp = i

    const handleDownloadClick = () => {
        const csvUrl = selectedValue === '' ? exp : expfile;
        // const csvUrl = exp;
        const date = new Date().toISOString().slice(0, 19);
    };

    useEffect(() => {
        Handletable()
        fetch("http://localhost:5000/project_studio_select",
            {
                method: 'GET',
                body: JSON.stringify(Object),
                headers: {
                    "Content-Type": "application/json",
                },

            })
            .then(resp => resp.json()).then(dat => setProj(dat))
    },

        []);


    async function Handletable() {

        let response = await axios.get('http://localhost:5000/get_filepath')
            .then((response2) => {
                setI(response2.data)
            }
            )

        let response1 = axios.get('http://localhost:5000/map_file')
            .then((response2) =>
                setK(response2.data)
            )

    }

    const expfile = k + "/" + dataset
    //   console.log(proj)
    console.log(expfile)
    const handleChange = (event) => {
        setDataset(event.target.value)
        setSelectedValue(event.target.value);
    };

    console.log(dataset)
    console.log('activeComponent:', activeComponent);
    const rows = [
        // createData(<BasicSelect />),
        createData(<div>
            <Box className="dropdown">
                <FormControl
                    size="small"
                    style={{ fontFamily: 'SourceSansPro-Regular', height: '40px', width: '150px', fontSize: '8px', }}
                >
                    <InputLabel id="demo-simple-select-label" >Select dataset</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dataset}
                        label="Select dataset"
                        onChange={handleChange}
                        style={{ fonstSize: "8px", display: 'flex', flexWrap: 'wrap', maxWidth: '250px' }}
                    >
                        {proj.map(pro =>
                            <MenuItem
                                style={{
                                    fontSize: "10px",
                                    // fontWeight: 'bold', 
                                    height: "29px",
                                }}
                                value={pro} >{pro}</MenuItem>

                        )}
                    </Select>
                </FormControl>
            </Box>
        </div>),

        createData(<Typography variant="h7"><center>Visualize</center></Typography>),
        createData(<Button
            component={Link} to="/projectstudio"
            onClick={() => handleClick(1)}
            style={{
                backgroundColor: "#FFFFFF",
                color: activeComponent == '1' ? '#3769DC' : '#141515',
                
                // color: "#3769DC",
                // color: "#141515",
                fontSize: "12px",
                marginLeft: "40px",
                alignItems: "center",
                textTransform: "none"

            }}
            variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} >
            Table view
        </Button>), createData(<Button
            // component={Link} to="/pivot"
            onClick={() => handleClick(2)}
            style={{
                backgroundColor: "#FFFFFF",
                // color: "#141515",
                color: activeComponent == '2' ? "#3769DC" : "#141515",
                fontSize: "12px",
                marginLeft: "40px",
                alignItems: "center",
                textTransform: "none"

            }}
            
            variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} >
                
            Pivot table
        </Button>),

        createData(<Button
            onClick={() => handleClick(3)}
            
            style={{
                backgroundColor: "#FFFFFF",
                color: activeComponent == '3' ? '#3769DC' : '#141515',
                // color: "#141515",
                fontSize: "12px",
                marginLeft: "40px",
                alignItems: "center",
                textTransform: "none"

            }}
            variant="text" startIcon={<ArrowCircleRightOutlinedIcon />}>
            Tree map
        </Button>),
    ];

    return (
        <div>
            <div className='datacleaning'> Project Studio</div>
            <div className='buttonpadding'>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Createdataset />
                    </Box>
                </Modal>

                <Modal
                    open={op}
                    onClose={handleCl}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Createcolumns />
                    </Box>
                </Modal>



                <Button
                    style={{
                        backgroundColor: "#141515",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        margin: "8px",
                        alignItems: "center",
                        boxShadow: "2px 18px 20px #C8CACF",
                        textTransform: "none",

                    }}
                    startIcon={<ChevronLeftOutlinedIcon />} component={Link} to="/">
                    Back to home
                </Button>

            </div>
            <Stack direction="row"
                spacing={5} >
                <Stack direction="column" spacing={8}  >


                    <TableContainer component={Paper} className="box" >
                        <Table size="small" aria-label="a dense table">

                            <TableBody alignItems="center">
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.names}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                    >
                                        <TableCell component="th" scope="row" align="left">
                                            {row.names}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
                <Stack direction="row"
                    spacing={2}
                    alignContent="space-between"
                >
                    <Stack direction="column"
                        spacing={2}
                        alignContent="space-between"
                        className='stackwidth'
                    >
                        <div >
                            <Button
                                onClick={() => handleClick(4)}
                                style={{
                                    // backgroundColor: "#4B4B4B",
                                    backgroundColor: activeComponent == '4' ? '#4B4B4B' : '#FFFFFF',
                                    color: activeComponent == '4' ? '#FFFFFF' : '#141515',
                                    margin: "2px",
                                    fontSize: "12px",
                                    alignItems: "center",
                                    boxShadow: "2px 18px 20px #C8CACF",
                                    textTransform: "none",
                                    marginTop: "-79px",
                                    height: "40px",
                                    width: "140px",

                                }}
                                variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />} >
                                Table statistics
                            </Button>
                            <Button
                                onClick={() => handleClick(5)}
                                style={{
                                    backgroundColor: activeComponent == '5' ? '#4B4B4B' : '#FFFFFF',
                                    color: activeComponent == '5' ? '#FFFFFF' : '#141515',
                                    // backgroundColor: "#FFFFFF",
                                    // color: "#141515",
                                    fontSize: "12px",
                                    margin: "2px",
                                    alignItems: "center",
                                    boxShadow: "2px 18px 20px #C8CACF",
                                    textTransform: "none",
                                    marginTop: "-79px",
                                    height: "40px",
                                    width: "110px"

                                }}
                                variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />} >
                                Informations
                            </Button>
                            <Button
                                style={{
                                    backgroundColor: activeComponent == '6' ? '#4B4B4B' : '#FFFFFF',
                                    color: activeComponent == '6' ? '#FFFFFF' : '#141515',
                                    fontSize: "12px",
                                    margin: "2px",
                                    alignItems: "center",
                                    boxShadow: "2px 18px 20px #C8CACF",
                                    textTransform: "none",
                                    marginTop: "-79px",
                                    height: "40px",
                                    width: "160px"

                                }}
                                variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />}
                                onClick={() => handleOp(6)} >
                                    
                                Generate columns
                            </Button>
                            <Button
                                style={{
                                    // backgroundColor: "#FFFFFF",
                                    // color: "#141515",
                                    backgroundColor: activeComponent == '7' ? '#4B4B4B' : '#FFFFFF',
                                    color: activeComponent == '7' ? '#FFFFFF' : '#141515',
                                    fontSize: "12px",
                                    margin: "2px",
                                    alignItems: "center",
                                    boxShadow: "2px 18px 20px #C8CACF",
                                    textTransform: "none",
                                    marginTop: "-79px",
                                    height: "40px",
                                    width: "160px"

                                }}
                                variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />}
                                // onClick={handleOpen}
                                onClick={() => handleOpen(7)} >
                                Create dataset
                            </Button>
                            {/* <Button
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#141515",
                                    fontSize: "12px",
                                    margin: "2px",
                                    alignItems: "center",
                                    boxShadow: "2px 18px 20px #C8CACF",
                                    textTransform: "none",
                                    marginTop: "-79px",
                                    height: "40px",
                                    width: "140px"

                                }}
                                variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />} onClick={() => { alert('clicked') }}>
                                Duplicate data
                            </Button> */}
                            {/* <Button
                        
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#141515",
                                    fontSize: "12px",
                                    margin: "2px",
                                    alignItems: "left",
                                    boxShadow: "2px 18px 20px #C8CACF",
                                    textTransform: "none",
                                    marginTop: "-79px",
                                    height: "40px",
                                    width: "95px",
                                }}
                                variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />} onClick={handleDownloadClick}>
                                Export
                            </Button> */}

                        </div>

                        {activeComponent === 1 &&
                            <>

                                {selectedValue === '' && <Table3 />}
                                {selectedValue !== '' && <Table4 value={dataset} />}

                                {/* <Table3 value={dataset} /> */}
                            </>
                        }

                        {activeComponent === 2 &&
                            <>

                                {selectedValue === '' && <Pivot />}
                                {selectedValue !== '' && <Pivotdrop value={dataset} />}

                                {/* <Table3 value={dataset} /> */}
                            </>
                        }
                        {activeComponent === 3 && <Tree />}
                        {activeComponent === 4 &&
                            <>

                                <Tablestatistics />


                                {/* <Table3 value={dataset} /> */}
                            </>
                        }

                        {activeComponent === 5 &&
                            <>

                                <Tableinfo />
                                {/* {selectedValue !== '' && <Tablestat value={dataset}  />} */}

                                {/* <Table3 value={dataset} /> */}
                            </>
                        }

                    </Stack>
                </Stack>

            </Stack>

        </div>


    )
}
