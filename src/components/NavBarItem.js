import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBarItem() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="/">LazyDog1120</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/development">Development</Nav.Link>
              <Nav.Link href="/eyetracking">Eye Tracking</Nav.Link>
              <Nav.Link href="/iterativedesign">Iterative Design</Nav.Link>
              <Nav.Link href="/filter">Filter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}