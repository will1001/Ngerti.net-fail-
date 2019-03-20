import React, { Component,Fragment } from 'react'
import { Row,Col } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import  './Section.css'


    const Section =  (props) => {
        let link='/'+props.id;
        return (
            <Fragment>
                <section id={props.id}>
                   <Row>
                    <Col md="12">
                        <Link to={link} className="text-dark"><h1 className="text-center">{props.title}</h1> </Link>
                        <div className="text-center">
                            <img src={props.src} alt="paket" />
                        </div>
                            <p className="text-center">{props.desc}</p>
                    </Col>
                   </Row>
                </section>
            </Fragment>
        )
    }

    export default Section;
