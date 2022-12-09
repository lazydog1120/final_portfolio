import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export function NavBarItem() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand><Link to="/"></Link>LazyDog1120</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/development">Development</Link></Nav.Link>
              <Nav.Link> <Link to="/eyetracking">Eye Tracking</Link></Nav.Link>
              <Nav.Link><Link to="/iterativedesign">Iterative Design</Link></Nav.Link>
              <Nav.Link><Link to="/filter">Filter</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}