import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup, Col, DropdownButton, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#home">
            {/* <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
              <rect id="Rectangle_3" data-name="Rectangle 3" fill="#e3e4e4" />
              <rect id="Rectangle_6" data-name="Rectangle 6" transform="translate(0 8)" fill="#e3e4e4" />
              <rect id="Rectangle_7" data-name="Rectangle 7" rx="1.5" transform="translate(0 15)" fill="#e3e4e4" />
            </svg> */}

            <svg id="ust-white-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.255 50.001">
              <path d="M11.608,0h5.078V10.949c0,5.091-3.047,8.157-8.3,8.157C2.917,19.106,0,15.909,0,10.949V0H5.078V10.973c0,2.186,1.248,3.431,3.278,3.431s3.251-1.245,3.251-3.431ZM8.6,37.915l1.608.39c4.534,1.093,6.2,3.195,6.2,5.823,0,3.461-3.091,5.872-8.257,5.872C5.263,50,1.7,48.789.325,46.3l3.149-2.546a6.239,6.239,0,0,0,4.654,2.073c1.676,0,3.007-.559,3.007-1.565,0-.807-.608-1.118-2.268-1.534l-1.687-.416C2.671,41.19.925,38.648.925,36.2c0-3.166,2.8-5.847,7.7-5.847,2.9,0,5.794,1.229,7.125,3.455L12.6,36.356a5.882,5.882,0,0,0-4-1.67c-1.755,0-2.611.716-2.611,1.384C5.991,36.956,6.81,37.472,8.6,37.915ZM29.117,30.9H45.255V35.3H39.736V49.411h-5.1V35.3H29.117ZM40.782,12.68H33.59V5.488h7.191Z" fill="#fff" fill-rule="evenodd" />
            </svg>
          </Navbar.Brand>
          <Row>
          <span className="square bg-dark rounded-pill border border-white" style={{width: "150 px"}}>

          <Col>
          {/* <img className="user-img"></img>  */}
          <Image
          className="userimg"
           src="https://cdn-icons-png.flaticon.com/128/219/219969.png"
           roundedCircle
         />
          {[DropdownButton].map((DropdownType, idx) => (
          
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="dark"
            title="Maria John"
            style={{marginLeft: 0, width: 120}}
          >
            <Dropdown.Item eventKey="1">Home</Dropdown.Item>
            <Dropdown.Item eventKey="2"> Logout</Dropdown.Item>
            {/* <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
            
          </DropdownType>
        ))}
        </Col>
        </span>

        </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;