import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import BasicExample from './Table';
import AdvancedExample from './Pagination';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Footer from './Footer';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Projects')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  console.log(data)
  return (
    <div>
    <Container fluid className="container-fluid">


      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row id="addPro">
        
        <Col></Col>
        <Col xs={6} md={4} className="col3" >
          <Form className="d-flex">

            <Form className="search_bar">
              <Form.Control className="me-2" type="search" placeholder="Search" />
              <svg className="search_icon" id="search-icon" xmlns="http://www.w3.org/2000/svg" width="19.688" height="19.6" viewBox="0 0 19.688 19.6">
                <path id="Path_17" data-name="Path 17" d="M18.288,19.6,15.5,16.9A9.511,9.511,0,1,1,9.5,0,9.56,9.56,0,0,1,19,9.5a9.716,9.716,0,0,1-2.1,6l2.788,2.7ZM9.5,2A7.555,7.555,0,0,0,2,9.5,7.555,7.555,0,0,0,9.5,17,7.555,7.555,0,0,0,17,9.5,7.555,7.555,0,0,0,9.5,2Z" fill="#282222" />
              </svg>
            </Form>
            
            <a href ='/upload'>
            <Button  variant="dark" id="buttonNewPro"><svg xmlns="http://www.w3.org/2000/svg" width="21.257" height="21.257" viewBox="0 0 21.257 21.257" id="iconNewPro">
              <g id="Group_6" data-name="Group 6" transform="translate(0 0)">
                <g id="Group_5" data-name="Group 5">
                  <path id="Path_6" data-name="Path 6" d="M159.976,157.646v2.33h-2.33a.746.746,0,1,0,0,1.492h2.33v2.33a.744.744,0,1,0,1.488,0v-2.33h2.33a.746.746,0,1,0,0-1.492h-2.33v-2.33a.744.744,0,1,0-1.488,0Z" transform="translate(-150.093 -150.093)" fill="#fff" />
                  <path id="Path_7" data-name="Path 7" d="M3.111,3.111A10.631,10.631,0,1,0,18.147,18.142,10.631,10.631,0,0,0,3.111,3.111Zm16.659,7.518a9.141,9.141,0,0,1-15.6,6.464A9.141,9.141,0,0,1,17.093,4.165,9.08,9.08,0,0,1,19.769,10.629Z" transform="translate(0 0)" fill="#fff" />
                </g>
              </g>
            </svg>
              New Project</Button>
              </a>
          </Form>
        </Col>
      </Row>
      <Row className="list_all_projects">
        <Col className="list-pro-col">
          <div className="list-pro"> List all projects</div>
        </Col>

        {/* <Col xs={8} className="col_stepsname">
          <Row className="stepsname">
            <Col className="datacollect-text">Data Collection</Col>
            <Col>Data Mapping</Col>
            <Col>Data Cleaning</Col>
            <Col>Completed</Col>
          </Row>
        </Col> */}
        <Col></Col>
      </Row>
      <br />
      <BasicExample />
      <AdvancedExample />
    </Container>
    {/* <Footer /> */}
    </div>

  );
}
export default Home;