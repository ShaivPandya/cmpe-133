import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navigation() {
    return(
        <Navbar bg="success" expand="lg">
        <Container>
        <Navbar.Brand href="/job-postings">Officium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navigation