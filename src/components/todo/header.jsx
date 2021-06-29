import {Navbar ,Nav} from 'react-bootstrap'
function Header(props) {
    return (
        <>
            <Navbar bg="primary" variant="dark" style={{'padding': '20px' }} >
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            </Navbar>
        </>
    )
}
export default Header;