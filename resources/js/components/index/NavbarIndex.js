import React, { Component,Fragment } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,img,Container } from 'react-bootstrap'
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom'


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
                      <Link to="/" className="text-dark">
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
                              to="/paketinstan"
                              className="text-dark"
                            >
                            paket instan
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#paketbulanan">
                            <Link
                              to="/paketbulanan"
                              className="text-dark"
                            >
                            paket bulanan
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#paketgroup">
                            <Link
                              to="/paketgroup"
                              className="text-dark"
                            >
                            paket group
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#paketintensif">
                            <Link
                              to="/paketintensif"
                              className="text-dark"
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
