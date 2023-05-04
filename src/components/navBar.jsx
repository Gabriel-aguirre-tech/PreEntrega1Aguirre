import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from './CartWidget'; 

function NavBar() {
    return (
    <div className="Navegador">
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
            <Navbar.Brand href="/Home">CutePlants</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
                <Nav.Link href="/Contacto">Contacto</Nav.Link>
                <NavDropdown title="Plantas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Plantas/Interior">Interior</NavDropdown.Item>
                    <NavDropdown.Item href="/Plantas/Exterior">Exterior</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
                <Navbar.Brand href="/Carrito"><Cartwidget /></Navbar.Brand>
            </Container>
        </Navbar>
    </div>
    );
};

export default NavBar;