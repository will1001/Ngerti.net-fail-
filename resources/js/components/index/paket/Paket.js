import React, { Component,Fragment } from 'react'
import { Form,Col,Row,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import  './Paket.css'
import Section from '../Section'
import FormPaket from './FormPaket'
import TutorSlideShow from './TutorSlideShow'
import NavbarIndex from '../NavbarIndex'


    class Paket extends Component {
   	constructor(props) {
  		super(props);
  	}


    render () {
    	let paketsection,grup,link = 0;
    	this.props.paket.map(
            (singleFile,index) => {
                return(
                 	paketsection = (singleFile.id===this.props.match.params.paket) ? index : paketsection
                )
            }
         );
    	grup = (this.props.match.params.paket==='paketgroup') ? 'paketgroup' : null;
    	link = '/#'+this.props.match.params.paket;
        return (
          <Fragment>
              <NavbarIndex/>
              <Section 
               id={this.props.paket[paketsection].id} 
               title={this.props.paket[paketsection].title}
               src={this.props.paket[paketsection].src}
               desc={this.props.paket[paketsection].desc}
               />
            <Container fluid="true">
              <FormPaket jenisPaket={grup}/>
            </Container>
            </Fragment>
        )
      }
    }


	const mapStateToProps = (state) => {
		return{
			paket: state.paketRedux
		}
	}	

    export default connect(mapStateToProps)(Paket);
