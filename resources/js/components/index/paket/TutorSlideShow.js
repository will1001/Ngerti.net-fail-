import React, { Component,Fragment } from 'react'
import { Form,Row,Col,Carousel } from 'react-bootstrap'
import  './TutorSlideShow.css'
import {connect} from 'react-redux'
import TutorCardProfile from './TutorCardProfile'




    class tutorSlideShow extends Component {
      render () {
        return (
            <Fragment>
               <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/book-books-bookshelf-159621.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/willem and charoly.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/book-books-bookshelf-159621.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </Fragment>
        )
      }
    }

    const mapStateToProps = (state) => {
        return{
        }
    }   

    export default connect(mapStateToProps)(tutorSlideShow);;
