import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    // creating navlink 
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">Learn with Rafi</Navbar.Brand>
          <Nav className="mx-auto p-3">
            <NavLink to="/home" className="mx-2">
              <Button variant="outline-info">Home</Button>
            </NavLink>
            <NavLink to="/about" className="mx-2">
              <Button variant="outline-info">About</Button>
            </NavLink>
            <NavLink to="/blog" className="mx-2">
              <Button variant="outline-info">Blogs</Button>
            </NavLink>
            <NavLink to="/service" className="mx-2">
              <Button variant="outline-info">Courses</Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>



  );
};

export default Header;