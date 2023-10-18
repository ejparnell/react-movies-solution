import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar({ user }) {
  return (
    <Navbar bg='light' data-bs-theme="light">
      <Container>
        <Navbar.Brand>Welcome, {user}!</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/">Movies</NavLink>
          &nbsp;
          <NavLink to="/actors">Actors</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
