import React, { Component,Fragment } from 'react'
import { Card,Button } from 'react-bootstrap'
import  './TutorCardProfile.css'
import {connect} from 'react-redux'




    class TutorCardProfile extends Component {
      render () {
        return (
            <Fragment>
               <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src="/images/favicon.png" />
                <Card.Body>
                  <Card.Title className="text-center">nama Tutor</Card.Title>
                </Card.Body>
              </Card>
            </Fragment>
        )
      }
    }

    const mapStateToProps = (state) => {
        return{
        }
    }   

    export default connect(mapStateToProps)(TutorCardProfile);;
