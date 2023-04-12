import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function SearchIcon() {
    return(
        <Container>
            <Form>
            <Form.Control className="search_tab" type="email" placeholder="Enter email" />
            <svg className="search_icon" id="search-icon" xmlns="http://www.w3.org/2000/svg" width="19.688" height="19.6" viewBox="0 0 19.688 19.6">
                <path id="Path_17" data-name="Path 17" d="M18.288,19.6,15.5,16.9A9.511,9.511,0,1,1,9.5,0,9.56,9.56,0,0,1,19,9.5a9.716,9.716,0,0,1-2.1,6l2.788,2.7ZM9.5,2A7.555,7.555,0,0,0,2,9.5,7.555,7.555,0,0,0,9.5,17,7.555,7.555,0,0,0,17,9.5,7.555,7.555,0,0,0,9.5,2Z" fill="#282222" />
              </svg>
            </Form>
        </Container>
    )
}
export default SearchIcon