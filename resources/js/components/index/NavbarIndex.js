import React, { Component,Fragment } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,img,Container } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";

import  './NavbarIndex.css'

    class NavbarIndex extends Component {


      constructor(props) {
        super(props)
        this.state = {
          scrollPositionY: 0,
        }
      }

      componentDidMount() {
        window.onscroll =()=>{
             this.setState({scrollPositionY: window.scrollY})
        }
      }


      render () {
        const NavbarBackgroundColor = (this.state.scrollPositionY > 600) ? 'navbarcolor' : 'navbarcolorTransparent';
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id={NavbarBackgroundColor}>
                  <Container fluid="true">
                    <Navbar.Brand href="#about">
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                      >
                        <img
                        alt=""
                        src="/images/favicon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        <span id="brandName">{' HOME '}</span>
                      </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto text-uppercase" defaultActiveKey="#home">
                        <NavDropdown title="paket" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#paketinstan">
                            <Link
                              activeClass="active"
                              to="paketinstan"
                              spy={true}
                              smooth={true}
                              offset={-71}
                              duration={1000}
                            >
                            paket instan
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#paketbulanan">
                            <Link
                              activeClass="active"
                              to="paketbulanan"
                              spy={true}
                              smooth={true}
                              offset={-71}
                              duration={1000}
                            >
                            paket bulanan
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#paketgroup">
                            <Link
                              activeClass="active"
                              to="paketgroup"
                              spy={true}
                              smooth={true}
                              offset={-71}
                              duration={1000}
                            >
                            paket group
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#paketintensif">
                            <Link
                              activeClass="active"
                              to="paketintensif"
                              spy={true}
                              smooth={true}
                              offset={-71}
                              duration={1000}
                            >
                            paket intensif
                            </Link>
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/register">
                            Join as Teacher
                        </Nav.Link>
                        <Nav.Link href="/register">
                            Join as Student
                        </Nav.Link>
                        <Nav.Link href="/login">
                            Login
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </Fragment>
        )
      }
    }

    export default NavbarIndex;
