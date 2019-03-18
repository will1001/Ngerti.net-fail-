import React, { Component,Fragment } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,img } from 'react-bootstrap'
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
              <>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id={NavbarBackgroundColor}>
                  <Navbar.Brand href="#home">
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      <img
                      alt=""
                      src="/images/favicon.png"
                      width="50"
                      height="50"
                      className="d-inline-block align-top"
                      />
                      <span id="brandName">{' Ngerti.net '}</span>
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                      <Nav.Link href="#home">
                        <Link
                          activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1000}
                        >
                          Home
                        </Link>
                      </Nav.Link>
                      <Nav.Link href="#about">
                        <Link
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1000}
                        >
                          About
                        </Link>
                      </Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </>
            </Fragment>
        )
      }
    }

    export default NavbarIndex;
