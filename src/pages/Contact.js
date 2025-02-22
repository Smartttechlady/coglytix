import React, { useRef } from 'react';
import './Contact.css'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



function Contact() {

    
    const handleEmailClick = () => {
        window.location.href = 'mailto:bo@coglytix.io  mailto:hello@coglytix.io';
      };
    
      const handlePhoneClick = () => {
        window.location.href = 'tel:+44 7432 865750';
      };
    
      
      const form = useRef();

      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fecz038', 'template_3zocoyp', form.current, {
            publicKey: 'w3--2oL69sZ1N2lv3',
          })
          .then(
            () => {
              alert('Email sent successfully');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    



  return (
    <div style={{ backgroundColor: '#111827', height: '100vh' }}>
    <Container className="text-center pt-5 mt-5">
      <h6 className="subtitle" style={{ color: '#bababa' }}>Get In Touch</h6>
      <h2 className="main-heading" style={{ color: '#fff'  }}>Contact Us</h2>
      <Row className="mt-4">
        <Col>
          <div>
            <FaEnvelope style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }} />
            <span
              onClick={handleEmailClick}
              style={{ color: '#fff', marginLeft: '10px', cursor: 'pointer', fontSize: '18px' }}
            >
              Email: : bo@coglytix.io | hello@coglytix.io
            </span>
          </div>
          <div className="mt-3">
            <FaPhoneAlt style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }} />
            <span
              onClick={handlePhoneClick}
              style={{ color: '#fff', marginLeft: '10px', cursor: 'pointer', fontSize: '18px' }}
            >
              Phone: +44 7432 865750
            </span>
          </div>
        </Col>
      </Row>
      <Form ref={form} onSubmit={handleSubmit} className="contact mt-5">
      <Form.Group controlId="formName" className="mb-3">
  <Form.Control 
    className="form-control" 
    style={{ backgroundColor: "#000", color: 'white', border: 'none' }} 
    type="text" 
    placeholder="Your Name" 
    name="from_name" 
    required 
  />
</Form.Group>

<Form.Group controlId="formEmail" className="mb-3">
  <Form.Control 
    className="form-control" 
    style={{ backgroundColor: "#000", color: '#fff', border: 'none' }} 
    type="email" 
    placeholder="Your Email" 
    name="user_email" 
    required 
  />
</Form.Group>

<Form.Group controlId="formMessage" className="mb-3">
  <Form.Control 
    className="form-control" 
    style={{ backgroundColor: "#000", color: '#fff',  border: 'none'}} 
    as="textarea" 
    rows={5} 
    placeholder="Your Message" 
    name="message" 
    required 
  />
</Form.Group>

        <Button className='contact-btn' style={{ backgroundColor: "linear-gradient(45deg, #AEC743, #041F58)", color: '#fff' }} type="submit" value="Send">  Send Message
         
        </Button>
      </Form>
    </Container>

  </div>
  )
}

export default Contact