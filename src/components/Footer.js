import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink, Routes, Route } from "react-router-dom";

export default function Footer(){
    return (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
          <Navbar.Brand href="#home">Code Cook's Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <NavLink to="/" className="link-item ">
            Home
          </NavLink>
          <NavLink to="/recepies" className="link-item">
            Recipes
          </NavLink>

          <NavLink to="/about" className="link-item">
            About
          </NavLink>
          <NavLink to="/contact" className="link-item">
            Contact
          </NavLink>
               
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            @2023 WBS WD#35-Group 3
          </Navbar.Text>
        </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }