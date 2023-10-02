import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import { Link } from 'react-router-dom';



function Home() {
    const[restList,setRestList]=useState([])
    //api function
    const getRest=async ()=>{
        //store response
        const result=await fetch('/restaurants.json')
        //convert data into js
        result.json().then(data=>{
            // store data in state
            setRestList(data.restaurants);
        })
    }
    console.log(restList);
    useEffect(()=>{
        getRest()
    },[]
    )


  return (
    <Row>
{
    restList.map(i=> (
        
            <Col sm={12} md={6} lg={3} xl={3}>
                <Link to={`viewrest/${i.id}`} style={{textDecoration:'none'}}>
      <Card id='d' className=' py-3 m-5'style={{ width: '18rem' }}>
      
        <Card.Img className='w-100'variant="top" src={i.photograph} />
        <Card.Body>
          <Card.Title className='mt-2 text-center'><strong>{i.name}</strong></Card.Title>
          <Card.Text>
            {i.address}
            
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
                
      </Col>
      
    ))
}
</Row>
  )
}

export default Home