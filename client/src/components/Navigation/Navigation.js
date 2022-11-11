import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navigation() {
    return(
        <Navbar bg="success" expand="lg">
        <Container>
        <Navbar.Brand href="/">Officium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#link">Account</Nav.Link>
                <Nav.Link href="#link">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navigation