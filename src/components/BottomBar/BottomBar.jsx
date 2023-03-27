import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const BottomBar = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand href="https://portfolio-danielgof.vercel.app/">Made by Daniil Gofman.</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default BottomBar