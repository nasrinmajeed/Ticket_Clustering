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
//import PivotTableUI from './Pivottable';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
// const pivotOnclick=()=>{
//     return (<PivotTableUI/>)
// }
function createData(names) {
    return { names };
}

const rows = [
    createData(<BasicSelect />),
    createData(<Button
        style={{
            backgroundColor: "#FFFFFF",
            color: "#141515",
            fontSize: "12px",
            marginLeft: "65px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" onClick={() => { alert('clicked') }}>
        Visualize
    </Button>),
    createData(

    <Button
        style={{
            backgroundColor: "#FFFFFF",
            color: "#141515",
            fontSize: "12px",
            marginLeft: "40px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} onClick={() => { alert('clicked') }}>
        Table view
    </Button>
    ), createData(<Button
        
        style={{
            backgroundColor: "#FFFFFF",
            color: "#3769DC",
            fontSize: "12px",
            marginLeft: "40px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" startIcon={<ArrowCircleRightOutlinedIcon />}
         >
        Pivot table
    </Button>),
    createData(<Button
        style={{
            backgroundColor: "#FFFFFF",
            color: "#141515",
            fontSize: "12px",
            marginLeft: "40px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} onClick={() => { alert('clicked') }}>
        Pie chart
    </Button>), createData(<Button
        style={{
            backgroundColor: "#FFFFFF",
            color: "#141515",
            fontSize: "12px",
            marginLeft: "40px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} onClick={() => { alert('clicked') }}>
        Bar chart
    </Button>), createData(<Button
        style={{
            backgroundColor: "#FFFFFF",
            color: "#141515",
            fontSize: "12px",
            marginLeft: "40px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} onClick={() => { alert('clicked') }}>
        Word cloud
    </Button>), createData(<Button
        style={{
            backgroundColor: "#FFFFFF",
            color: "#141515",
            fontSize: "12px",
            marginLeft: "40px",
            alignItems: "center",
            textTransform: "none"

        }}
        variant="text" startIcon={<ArrowCircleRightOutlinedIcon />} onClick={() => { alert('clicked') }}>
        Tree map
    </Button>),
];

export default function Projectstudio() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className='datacleaning'> Project Studio</div>
            <div className='buttonpadding'>
                <Button
                    style={{
                        backgroundColor: "#FFFFFF",
                        color: "#141515",
                        fontSize: "12px",
                        margin: "8px",
                        alignItems: "center",
                        boxShadow: "2px 18px 20px #C8CACF",
                        textTransform: "none"

                    }}
                    variant="contained" color="success" startIcon={<ArrowCircleDownOutlinedIcon />}
                     onClick={() => { alert('clicked') }}>
                    Create dataset
                </Button>
               
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
                    startIcon={<ChevronLeftOutlinedIcon />} onClick={() => { alert('clicked') }}>
                    Back to home
                </Button>

            </div>
            <Stack direction="row"
                spacing={5} >
                <Stack direction="column" spacing={8}  >

                    <TableContainer component={Paper}  >
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
               
                </Stack>

            </Stack>

        </div>

    )
}

