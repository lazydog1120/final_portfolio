import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export function NavBarItem() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand>LazyDog1120</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/development"><Nav.Link href="/development">Development</Nav.Link></Link>
              <Link to="/eyetracking"><Nav.Link href="/eyetracking">Eye Tracking</Nav.Link></Link>
              <Link to="/iterativedesign"><Nav.Link href="/iterativedesign">Iterative Design</Nav.Link></Link>
              <Link to="/filter"><Nav.Link href="/filter">Filter</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}