import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink, Routes, Route } from "react-router-dom";

export default function Footer(){
    return (
        
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
          <Navbar.Brand href="/">Pinch Of Salt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <NavLink to="/" className="link-footer">
            Home
          </NavLink>
          <NavLink to="/recepies" className="link-footer">
            Recipes
          </NavLink>

          <NavLink to="/about" className="link-footer">
            About
          </NavLink>
          <NavLink to="/contact" className="link-footer">
            Contact
          </NavLink>
               
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            @2023 Prinyanka / Ahmed / Kevin / Cristian
          </Navbar.Text>
        </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }