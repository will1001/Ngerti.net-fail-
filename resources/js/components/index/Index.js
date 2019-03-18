import React, { Component,Fragment } from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap'
import  './Index.css'
import  Section from './Section'

import NavbarIndex from './NavbarIndex'



    class Index extends Component {
      render () {
        return (
            <Fragment>
                <NavbarIndex/>
                <section id="about">
                </section>

             <Section 
             id="paketinstan" 
             title="Paket Instan" 
             src="/images/instan.png" 
             desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur." 
             />

             <Section 
             id="paketbulanan" 
             title="Paket Bulanan" 
             src="/images/kalender.png" 
             desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur." 
             />

             <Section 
             id="paketgroup" 
             title="Paket Group" 
             src="/images/group.png" 
             desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur." 
             />

             <Section 
             id="paketintensif" 
             title="Paket Intensif" 
             src="/images/intensif.png" 
             desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur." 
             />

                <footer>
                    <Container>
                        <Row>
                        <Col md="12">
                            <div className="text-center">
                                <p className="text-center"><i className="text-dark fas fa-map-marker"></i>Jl. lorem ipsum</p>
                                <p className="text-center"><i className="text-dark fas fa-phone"></i> 081 123 456 789</p>
                                <p className="text-center"><i className="text-dark fas fa-envelope"></i> office@gmail.com</p>
                            </div>
                        </Col>
                       </Row>
                    </Container>
                </footer>
            </Fragment>
        )
      }
    }

    export default Index;
