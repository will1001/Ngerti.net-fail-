import React, { Component,Fragment } from 'react'
import { Form,Row,Col,Carousel,FormControl,Button  } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import  './FormPaket.css'
import TutorCardProfile from './TutorCardProfile'

    

    function CekPaketGrup(props) {
            const isPaketgrup = props.jenisPaket==='paketgroup';
            if(isPaketgrup){
                return(
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formMateri">
                      <Form.Label>Jumlah Group</Form.Label>
                      <Form.Control type="number" min="1" placeholder="Isi Jumlah Group yang diinginkan" required/>
                      <Form.Control.Feedback type="invalid">Isi Jumlah Group yang diinginkan</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                )    
            }else{
                return null;
            }
            
        };


    class FormPaket extends Component {
        constructor(props) {
            super(props);

            this.state = { validated: false };
          }

          handleSubmit(event) {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            this.setState({ validated: true });
          }

          

      render () {
        const { validated } = this.state;
        return (
            <Fragment>
               <Form
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
              >
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formMapel">
                      <Form.Label>Mata Pelajaran</Form.Label>
                        <Form.Control as="select" required>
                        <option value="" disabled selected>Pilih Mata pelajaran yang anda inginkan</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">Pelajaran Yang anda inginkan belum dipilih</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  
                  <Form.Row>
                    <Form.Group as={Col} md="2" controlId="formTanggal">
                        <Form.Label>Jadwal</Form.Label>
                        <Form.Control type="date" placeholder="Tanggal" required/>
                        <Form.Control.Feedback type="invalid">Tanggal belum di tentukan</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formJam">
                        <Form.Label style={{ opacity: '0' }} >.</Form.Label>
                        <Form.Control type="time" placeholder="Jam" required/>
                        <Form.Control.Feedback type="invalid">Jam belum di tentukan</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formMateri">
                      <Form.Label>Materi</Form.Label>
                      <Form.Control placeholder="Tulis materi yang ingin anda pelajari" required/>
                      <Form.Control.Feedback type="invalid">Tulis materi yang ingin anda pelajari</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <CekPaketGrup jenisPaket={this.props.jenisPaket} />

                <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Pilih Tutor</Form.Label>
                    </Form.Group>
                </Form.Row>


                    <Form.Group as={Row}>
                      <Form.Check 
                        required
                        label=
                            {
                                <TutorCardProfile/>
                            }
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        feedback="You must agree before submitting1."
                      />
                      <Form.Check 
                        required
                        label=
                            {
                                <TutorCardProfile/>
                            }
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        feedback="You must agree before submitting1."
                      />
                      <Form.Check 
                        required
                        label=
                            {
                                <TutorCardProfile/>
                            }
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        feedback="You must agree before submitting1."
                      />
                  </Form.Group>
                <Button type="submit">Order</Button>
                </Form>

            </Fragment>
        )
      }
    }


    export default FormPaket;
