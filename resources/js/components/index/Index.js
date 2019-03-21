import React, { Component,Fragment } from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap'
import  './Index.css'
import  Section from './Section'
import {connect} from 'react-redux'

import NavbarIndex from './NavbarIndex'



    class Index extends Component {
      render () {


        //Section component looping
        const section = this.props.paket.map(
            (data,index) => {
                return(
                    <Section
                         key={index} 
                         id={data.id}
                         title={data.title}
                         src={data.src}
                         desc={data.desc}
                       />
                )
            }
         );


        return (
            <Fragment>
                <NavbarIndex/>
                <section id="about">
                    <h1 className="text-center text-light">ngerti.net </h1>
                </section>

                {section}
                
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

    const mapStateToProps = (state) => {
        return{
            paket: state.paketRedux
        }
    }   

    export default connect(mapStateToProps)(Index);
