import React, { useState, useContext} from 'react';
import WeatherApiContext from '../context/WeatherApiContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';
import "bootswatch/dist/morph/bootstrap.min.css";

function GetLocationModal() {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState(null);


  const {fetchData} = useContext(WeatherApiContext);

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(location === null) {
      toast.error('Please type location');
    } else {
      fetchData(location);
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="default" onClick={handleShow}>
        Change Location
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor='get-location'>Please type your location!</Form.Label>
              <Form.Control id='get-location' type='text' placeholder='Szczecin' autoFocus onInput={handleInputLocation}/>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="default" type='submit' onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GetLocationModal;