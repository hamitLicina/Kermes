import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';



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
