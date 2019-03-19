import React, { Component,Fragment } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import  './Paket.css'
import Section from '../Section'


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
    	grup = (this.props.match.params.paket==='paketgroup') ? '<h1>grup ok</h1>' : null;
    	link = '/#'+this.props.match.params.paket;
        return (
          <Fragment>
           		<Link to={link}><h1>BACK</h1> </Link>
                <Section 
	             id={this.props.paket[paketsection].id} 
	             title={this.props.paket[paketsection].title}
	             src={this.props.paket[paketsection].src}
	             desc={this.props.paket[paketsection].desc}
	             />

	       <h1>{grup}</h1>
	             
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
