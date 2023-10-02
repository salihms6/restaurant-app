import React, { useEffect, useState } from 'react'

import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css'
import OperatingTime from './OperatingTime';
import Reviews from './Reviews';




function Restview() {
  const [allRest, setAllRest] = useState([])

  const getRest = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => {
      setAllRest(data.restaurants);
    })
  }
  const params = useParams()

  const singleRest = allRest.find(i => i.id == params.id)
  console.log(singleRest);

  //console.log(allRest);
  useEffect(() => {
    getRest()
  }, [])
  return (
    <>
      {
        singleRest ? (
          <Row>
            <Col lg={6} md={12} sm={12} xl={6}>

              <Image className='w-75 p-5'
                style={{ height: '800px' }}
                src={singleRest.photograph} rounded />
            </Col>

            <Col lg={6} md={12} sm={12} xl={4}>
              <h1>{singleRest.name}</h1>
              <ListGroup className='fs-4 mt-5'>
                <ListGroup.Item id='d' className='pt-4 mt-2'>Neighborhood <strong className='text-warning'>{singleRest.neighborhood}</strong></ListGroup.Item>
                <ListGroup.Item id='d' className='pt-4 mt-2'>Address <strong className='text-warning'>{singleRest.address}</strong></ListGroup.Item>
                <ListGroup.Item id='d' className='pt-4 mt-2'>Cuisine_type <strong className='text-warning'>{singleRest.cuisine_type}</strong></ListGroup.Item>
                <ListGroup.Item id='d' className='pt-4 mt-2'><OperatingTime timeData={singleRest.operating_hours} /></ListGroup.Item>
                <ListGroup.Item id='d' className='pt-4 mt-2'><Reviews reviews={singleRest.reviews} /></ListGroup.Item>
              </ListGroup>




            </Col>
          </Row>
        ) : 'null'}



    </>
  )
}

export default Restview
