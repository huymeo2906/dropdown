// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Modal, Offcanvas, Dropdown } from 'react-bootstrap';

function App() {
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Offcanvas state
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Bootstrap Components</h1>
      
      {/* Modal */}
      <Button variant="primary" onClick={handleShowModal}>
        Open Modal
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you&apos;re reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Offcanvas */}
      <Button variant="secondary" onClick={handleShowOffcanvas} style={{ marginLeft: '10px' }}>
        Open Offcanvas
      </Button>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some content inside the Offcanvas component.
        </Offcanvas.Body>
      </Offcanvas>

      {/* Dropdown */}
      <Dropdown style={{ marginTop: '20px' }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
