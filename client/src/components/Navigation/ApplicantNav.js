import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function ApplicantNav() {
    return(
        <Navbar bg="success" expand="lg">
        <Container>
        <Navbar.Brand href="/view-openings">Officium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/view-account">Account</Nav.Link>
                <Nav.Link href="/view-submitted-applications">Submitted Applications</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default ApplicantNav