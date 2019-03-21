import React, { Component,Fragment } from 'react'
import { Form,Row,Col,Carousel,FormControl,Button  } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import  './FormPaket.css'
import TutorCardProfile from './TutorCardProfile'
import {connect} from 'react-redux'
import { Link,Redirect  } from 'react-router-dom'


    

    


    class FormPaket extends Component {
        constructor(props) {
            super(props);

            this.handleMapelChange = this.handleMapelChange.bind(this);
            this.handleTanggalChange = this.handleTanggalChange.bind(this);
            this.handleJamChange = this.handleJamChange.bind(this);
            this.handleMateriChange = this.handleMateriChange.bind(this);
            this.handleJmlGrupChange = this.handleJmlGrupChange.bind(this);
            this.handletutorChange = this.handletutorChange.bind(this);

            this.state = { 
              datamapel: [], 
              validated: false, 
              mapel: '', 
              tanggal: '', 
              jam: '', 
              materi: '', 
              jmlGrup: '', 
              tutor: '', 
            };
          }

          componentDidMount(){
            fetch('http://127.0.0.1:8000/datamapel')
            .then(response =>response.json())
            .then(json => {
              this.setState({
                datamapel:json.mapels
              });
              console.log(this.state.datamapel)
            })




          }

          handleSubmit(event) {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            this.setState({ validated: true });
          }

          
          handleMapelChange(e) {
            this.setState({mapel: e.target.value});  
          }

          handleTanggalChange(e) {
            console.log(e.target.value);
            this.setState({tanggal: e.target.value});  
          }

          handleJamChange(e) {
            console.log(e.target.value);
            this.setState({jam: e.target.value});  
          }

          handleMateriChange(e) {
            this.setState({materi: e.target.value});  
          }

          handleJmlGrupChange(e) {
            this.setState({jmlGrup: e.target.value});  
          }

          handletutorChange(e) {
            this.setState({tutor: e.target.id});  
          }

          CekPaketGrup(jenisPaket) {
            const isPaketgrup = jenisPaket==='paketgroup';
            if(isPaketgrup){
                return(
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formMateri">
                      <Form.Label>Jumlah Group</Form.Label>
                      <Form.Control type="number" min="2" max="4" placeholder="Isi Jumlah Group yang diinginkan" onChange={this.handleJmlGrupChange} required/>
                      <Form.Control.Feedback type="invalid">Isi Jumlah Group yang diinginkan</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                )    
            }else{
                return null;
            }
            
        };

          

      render () {
        const { validated } = this.state;
        const tutorOption = this.props.tutor.map(
            (data,index) => {
                return(
                    <Form.Check
                        onChange={this.handletutorChange}
                        key={index} 
                        required
                        label=
                            {
                                <TutorCardProfile/>
                            }
                        type="radio"
                        name="formTutor"
                        id={data.id}
                        feedback="Pilih tutor."
                      />
                )
            }
         );
        return (
            <Fragment>
               <Form
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
                action="/member"
              >
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formMapel">
                      <Form.Label>Mata Pelajaran</Form.Label>
                        <Form.Control as="select" onChange={this.handleMapelChange} required>
                          <option value="" disabled selected>Pilih Mata pelajaran yang anda inginkan</option>
                          {
                            this.state.datamapel.map(data => {
                              return <option key={data.id}>{data.mata_pelajaran}</option>
                            })
                          }
                        </Form.Control>
                      <Form.Control.Feedback type="invalid">Pelajaran Yang anda inginkan belum dipilih</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  
                  <Form.Row>
                    <Form.Group as={Col} md="2" controlId="formTanggal">
                        <Form.Label>Jadwal</Form.Label>
                        <Form.Control type="date" placeholder="Tanggal" onChange={this.handleTanggalChange} required/>
                        <Form.Control.Feedback type="invalid">Tanggal belum di tentukan</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formJam">
                        <Form.Label style={{ opacity: '0' }} >.</Form.Label>
                        <Form.Control type="time" placeholder="Jam" onChange={this.handleJamChange} required/>
                        <Form.Control.Feedback type="invalid">Jam belum di tentukan</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formMateri">
                      <Form.Label>Materi</Form.Label>
                      <Form.Control placeholder="Tulis materi yang ingin anda pelajari" onChange={this.handleMateriChange} required/>
                      <Form.Control.Feedback type="invalid">Tulis materi yang ingin anda pelajari</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {this.CekPaketGrup(this.props.jenisPaket)}

                <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Pilih Tutor</Form.Label>
                    </Form.Group>
                </Form.Row>


                    <Form.Group as={Row}>
                      {tutorOption}  
                    </Form.Group>
                <Button type="submit">Order</Button>
                </Form>

            </Fragment>
        )
      }
    }


    const mapStateToProps = (state) => {
        return{
            tutor: state.tutorRedux
        }
    }   

    export default connect(mapStateToProps)(FormPaket);
