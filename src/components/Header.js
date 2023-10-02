import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import'./Header.css' 
function header() {
  return (
    <div><Navbar className="bg-body-tertiary" variant='warning'>
    <Container>
      <Navbar.Brand href="#home">
        <img id='d1'style={
          {height:'40px',
        width:'40px',
        borderRadius:'40px'

      }
        }
          alt=""
          src="https://i.postimg.cc/zXg4XgJP/pink-restaurants-icon-19.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Find Best Restaurant
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default header