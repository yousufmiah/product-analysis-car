import React, { createContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CarContext = createContext("Car Showroom");

const Header = () => {
  return (
    // <CarContext.Provider value="Car Show Room">
    <CarContext.Provider value={{ CarContext }}>
      <div className="header-container sticky-top">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              {
                <a
                  target="blank"
                  href="https://www.youtube.com/watch?v=cPV6DIzpFtQ"
                >
                  <FontAwesomeIcon
                    style={{ color: "red", width: "40px", height: "40px" }}
                    icon={faCar}
                  />
                  Car Showroom
                </a>
              }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </CarContext.Provider>
  );
};

export default Header;
