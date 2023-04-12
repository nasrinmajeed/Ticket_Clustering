import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router';

function AdvancedExample() {
  const navigate = useNavigate();
  return (
    <Pagination className="paginataion-row">
      {/* <Pagination.First /> */}
      {/* <Pagination.Prev /> */}
      <Pagination.Item disabled>{"Prev"}</Pagination.Item>

      <Pagination.Item className="pagination">{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      {/* <Link to="/addproject"> */}
      <Pagination.Item href='/project'>{"Next"}</Pagination.Item>
      {/* <Pagination.Next /> */}
      {/* <Pagination.Ellipsis /> */}

      {/* <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
     
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}

export default AdvancedExample;