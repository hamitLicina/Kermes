import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
//import Alert from 'react-bootstrap/Alert';
import { Alert } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  

  return (
    <>
      <Button variant="success">Success</Button>{' '}
      <Alert key='danger' variant='danger'>
        This is a danger alert—check it out!
      </Alert>
    </>
  )
}

export default App
