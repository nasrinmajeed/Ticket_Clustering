//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ColorSchemesExample from './Navigationbar';
import Datainfo from './Datainfo'
import Datacleaning from './Datacleaning';
import Projectstudio from './Projectstudio';
import Upload from './Upload';
import FormPropsTextFields from './Datainfo';
import {Link, Outlet, Route, Routes} from 'react-router-dom';
import Table1 from './Table1'
import Table3 from './Table3'
import Table1sample from './Table1sample'
import Footer from './Footer';
import Fieldmapping from './FieldMapping'
import DataCleaning from './Datacleaning';
import Piestudio from './Piestudio';
import Pivotstudio from './Pivotstudio';
// import PivotTableUI from './Pivottable';
//import Searchicon from './Searchicon'

function App() {
  return (
    <>
      <ColorSchemesExample />
      {/* <Home />   */}
      {/* <Searchicon/> */}
      {/* <Datacleaning/> */}
      {/* <Projectstudio /> */}
      {/* <Upload/> */}
      {/* <FormPropsTextFields/> */}
      {/* <PivotTableUI/> */}
                      <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/upload' element={<Upload/>} />
                        <Route path='/datainfo' element={<Datainfo/>} />
                        <Route path='/fieldmapping' element={<Fieldmapping/>} />
                        <Route path='/datacleaning' element={<DataCleaning/>} />
                        <Route path='/projectstudio' element={<Projectstudio/>} />
                        <Route path='/table3' element={<Table3/>} />
                        <Route path='/pivot' element={<Pivotstudio/>} />
                        <Route path='/pie' element={<Piestudio/>} />

                      </Routes>
      {/* <Table1sample />  */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
