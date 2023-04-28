import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from '../components/Cartwidget'; 

function Navegador() {
    return (
    <div className="Navegador">
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
            <Navbar.Brand href="#home">CutePlants</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Nosotros</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <NavDropdown title="Plantas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Interior</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Exterior
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link"><Cartwidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Navegador;