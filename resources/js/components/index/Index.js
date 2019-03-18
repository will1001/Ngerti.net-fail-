import React, { Component,Fragment } from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap'
import  './Index.css'

import NavbarIndex from './NavbarIndex'



    class Index extends Component {
      render () {
        return (
            <Fragment>
                <NavbarIndex/>
                <section id="home">
                </section>

                <section id="about">
                   <h1 className="text-center">About</h1> 
                </section>
            </Fragment>
        )
      }
    }

    export default Index;
